/**
 * Glossa JS Interop Bridge
 * Connects Blazor WebAssembly to markoutso/glo interpreter and compiler engine.
 */
(function () {
    window.glossaBridge = {
        _running: false,
        _abortController: null,
        _pendingInputResolve: null,
        _pendingInputReject: null,
        _dotnetRef: null,

        /**
         * Checks if the compiler engine is loaded.
         */
        isReady: function () {
            return typeof window.gloEngine !== 'undefined' && typeof window.gloEngine.interpret === 'function';
        },

        /**
         * Checks if the interpreter is currently running code.
         */
        isRunning: function () {
            return this._running;
        },

        /**
         * Runs syntax check / compilation on the given source code.
         * Returns an object { success: boolean, diagnostics: Array<{ line: number, column: number, severity: string, message: string }> }
         */
        compile: async function (source) {
            const diagnostics = [];
            if (!this.isReady()) {
                return {
                    success: false,
                    diagnostics: [{ line: 1, column: 1, severity: 'Error', message: 'Ο μεταγλωττιστής Γλώσσας δεν είναι φορτωμένος.' }]
                };
            }

            try {
                // To perform a syntax/semantic check, we can invoke the interpret step
                // but supply dummy read/write handlers. If there is a parse or semantic error,
                // it throws immediately before any statement runs.
                let executed = false;
                await window.gloEngine.interpret(source, {
                    read: () => Promise.resolve(''),
                    write: () => Promise.resolve(),
                    interceptor: () => {
                        // After first instruction, we know syntax/semantics succeeded
                        executed = true;
                        return Promise.reject(new Error('__SYNTAX_CHECK_PASS__'));
                    }
                });
                return { success: true, diagnostics: [] };
            } catch (err) {
                if (err && err.message === '__SYNTAX_CHECK_PASS__') {
                    return { success: true, diagnostics: [] };
                }

                const diag = this._extractDiagnostic(err);
                if (diag) {
                    diagnostics.push(diag);
                }
                return { success: false, diagnostics: diagnostics };
            }
        },

        /**
         * Executes the ΓΛΩΣΣΑ program with streaming standard I/O via Blazor JSInvokable callbacks.
         */
        run: async function (source, dotnetRef) {
            if (this._running) {
                console.warn('Execution already in progress.');
                return;
            }

            this._running = true;
            this._dotnetRef = dotnetRef;

            // Ensure source ends with a newline as required by the parser
            const normalizedSource = source.endsWith('\n') ? source : source + '\n';

            try {
                await window.gloEngine.interpret(normalizedSource, {
                    read: (debugInfo) => {
                        return new Promise((resolve, reject) => {
                            this._pendingInputResolve = resolve;
                            this._pendingInputReject = reject;

                            if (dotnetRef) {
                                dotnetRef.invokeMethodAsync('OnInputRequested', '');
                            }
                        });
                    },
                    write: (...data) => {
                        const line = data.join(' ');
                        if (dotnetRef) {
                            dotnetRef.invokeMethodAsync('OnStdOut', line);
                        }
                        return Promise.resolve();
                    }
                });

                this._running = false;
                this._pendingInputResolve = null;
                this._pendingInputReject = null;

                if (dotnetRef) {
                    dotnetRef.invokeMethodAsync('OnExecutionCompleted', true);
                }
            } catch (err) {
                this._running = false;
                this._pendingInputResolve = null;
                this._pendingInputReject = null;

                if (err && err.message === '__ABORTED__') {
                    if (dotnetRef) {
                        dotnetRef.invokeMethodAsync('OnStdErr', '\n[Η εκτέλεση διακόπηκε από το χρήστη]');
                        dotnetRef.invokeMethodAsync('OnExecutionCompleted', false);
                    }
                    return;
                }

                const diag = this._extractDiagnostic(err);
                const errorMessage = diag ? `[Γραμμή ${diag.line}, Στήλη ${diag.column}] Σφάλμα: ${diag.message}` : `Σφάλμα: ${err ? (err.message || err.toString()) : 'Άγνωστο σφάλμα'}`;

                if (dotnetRef) {
                    dotnetRef.invokeMethodAsync('OnStdErr', errorMessage);
                    if (diag) {
                        dotnetRef.invokeMethodAsync('OnDiagnosticsReported', [diag]);
                    }
                    dotnetRef.invokeMethodAsync('OnExecutionCompleted', false);
                }
            }
        },

        /**
         * Delivers user input entered in the terminal to the waiting interpreter Promise.
         */
        sendInput: function (value) {
            if (this._pendingInputResolve) {
                const resolve = this._pendingInputResolve;
                this._pendingInputResolve = null;
                this._pendingInputReject = null;
                resolve(value);
            }
        },

        /**
         * Aborts the active interpreter execution loop.
         */
        stop: function () {
            if (this._pendingInputReject) {
                const reject = this._pendingInputReject;
                this._pendingInputResolve = null;
                this._pendingInputReject = null;
                reject(new Error('__ABORTED__'));
            }
            this._running = false;
        },

        /**
         * Helper to parse GLOError into line, column, severity, and user-friendly message.
         */
        _extractDiagnostic: function (err) {
            if (!err) return null;

            let line = 1;
            let col = 1;
            let msg = err.message || err.toString();

            if (err.start && typeof err.start.linePosition === 'number') {
                // glo line numbers are 0-based
                line = err.start.linePosition >= 0 ? err.start.linePosition + 1 : 1;
                col = err.start.characterPosition >= 0 ? err.start.characterPosition + 1 : 1;
            }

            return {
                line: line,
                column: col,
                severity: 'Error',
                message: msg
            };
        }
    };
})();
