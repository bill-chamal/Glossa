/**
 * Monaco Editor Interop for Blazor WebAssembly
 * Language definition, Monarch tokenizer, snippets, and themes for ΓΛΩΣΣΑ.
 * Configured with unicodeHighlight: false to eliminate yellow boxes around Greek letters.
 * Multi-model tab switching support.
 */
(function () {
    let editorInstance = null;
    let isConfigured = false;
    let dotnetRefHolder = null;
    let models = new Map(); // tabId -> monaco.editor.ITextModel
    let activeTabId = null;

    function configureGlossaLanguage() {
        if (isConfigured || typeof monaco === 'undefined') return;

        // 1. Register Language
        monaco.languages.register({ id: 'glossa' });

        // 2. Register Language Configuration (Brackets, Comments)
        monaco.languages.setLanguageConfiguration('glossa', {
            comments: {
                lineComment: '!'
            },
            brackets: [
                ['(', ')'],
                ['[', ']']
            ],
            autoClosingPairs: [
                { open: '(', close: ')' },
                { open: '[', close: ']' },
                { open: '"', close: '"' },
                { open: "'", close: "'" }
            ],
            surroundingPairs: [
                { open: '(', close: ')' },
                { open: '[', close: ']' },
                { open: '"', close: '"' },
                { open: "'", close: "'" }
            ]
        });

        // 3. Register Monarch Tokenizer
        monaco.languages.setMonarchTokensProvider('glossa', {
            defaultToken: '',
            tokenPostfix: '.glossa',
            ignoreCase: true,

            keywords: [
                'ΠΡΟΓΡΑΜΜΑ', 'ΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ',
                'ΑΛΓΟΡΙΘΜΟΣ', 'ΤΕΛΟΣ', 'ΤΕΛΟΣ_ΑΛΓΟΡΙΘΜΟΥ',
                'ΜΕΤΑΒΛΗΤΕΣ', 'ΣΤΑΘΕΡΕΣ',
                'ΑΚΕΡΑΙΕΣ', 'ΠΡΑΓΜΑΤΙΚΕΣ', 'ΧΑΡΑΚΤΗΡΕΣ', 'ΛΟΓΙΚΕΣ',
                'ΑΚΕΡΑΙΑ', 'ΠΡΑΓΜΑΤΙΚΗ', 'ΧΑΡΑΚΤΗΡΑΣ', 'ΛΟΓΙΚΗ',
                'ΑΡΧΗ',
                'ΑΝ', 'ΤΟΤΕ', 'ΑΛΛΙΩΣ', 'ΑΛΛΙΩΣ_ΑΝ', 'ΤΕΛΟΣ_ΑΝ',
                'ΕΠΙΛΕΞΕ', 'ΠΕΡΙΠΤΩΣΗ', 'ΤΕΛΟΣ_ΕΠΙΛΟΓΩΝ',
                'ΟΣΟ', 'ΕΠΑΝΑΛΑΒΕ', 'ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ',
                'ΓΙΑ', 'ΑΠΟ', 'ΜΕΧΡΙ', 'ΜΕ_ΒΗΜΑ',
                'ΑΡΧΗ_ΕΠΑΝΑΛΗΨΗΣ', 'ΜΕΧΡΙΣ_ΟΤΟΥ',
                'ΔΙΑΒΑΣΕ', 'ΓΡΑΨΕ', 'ΤΥΠΩΣΕ', 'ΕΚΤΥΠΩΣΕ',
                'ΔΙΑΔΙΚΑΣΙΑ', 'ΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ',
                'ΣΥΝΑΡΤΗΣΗ', 'ΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ',
                'ΚΑΛΕΣΕ', 'DIV', 'MOD',
                'ΚΑΙ', 'Η', 'ΟΧΙ'
            ],

            booleans: [
                'ΑΛΗΘΗΣ', 'ΨΕΥΔΗΣ'
            ],

            operators: [
                '<-', '+', '-', '*', '/', '^', '=', '<>', '<', '>', '<=', '>='
            ],

            symbols: /[=><!~?:&|+\-*\/\^%]+/,

            tokenizer: {
                root: [
                    // Comments
                    [/!.*$/, 'comment'],

                    // Strings
                    [/"([^"\\]|\\.)*"/, 'string'],
                    [/'([^'\\]|\\.)*'/, 'string'],

                    // Numbers
                    [/\b\d+(\.\d+)?\b/, 'number'],

                    // Assignment operator
                    [/<-/, 'operator.assignment'],

                    // Identifiers and Keywords (Unicode Greek & Latin)
                    [/[a-zA-Z_\u0370-\u03ff\u1f00-\u1fff][a-zA-Z0-9_\u0370-\u03ff\u1f00-\u1fff]*/, {
                        cases: {
                            '@keywords': 'keyword',
                            '@booleans': 'constant.language',
                            '@default': 'identifier'
                        }
                    }],

                    // Operators
                    [/@symbols/, {
                        cases: {
                            '@operators': 'operator',
                            '@default': ''
                        }
                    }],

                    // Delimiters
                    [/[{}()\[\]]/, '@brackets'],
                    [/[,:.]/, 'delimiter']
                ]
            }
        });

        // 4. Register Autocompletion & Code Snippets
        monaco.languages.registerCompletionItemProvider('glossa', {
            provideCompletionItems: function (model, position) {
                const suggestions = [
                    {
                        label: 'ΠΡΟΓΡΑΜΜΑ',
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: 'ΠΡΟΓΡΑΜΜΑ ${1:Program_Name}\nΜΕΤΑΒΛΗΤΕΣ\n  ΑΚΕΡΑΙΕΣ: ${2:x}\nΑΡΧΗ\n  ${0}\nΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'Complete Glossa program structure'
                    },
                    {
                        label: 'ΑΝ',
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: 'ΑΝ ${1:condition} ΤΟΤΕ\n  ${0}\nΤΕΛΟΣ_ΑΝ',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'Conditional IF structure'
                    },
                    {
                        label: 'ΑΝ_ΑΛΛΙΩΣ',
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: 'ΑΝ ${1:condition} ΤΟΤΕ\n  ${2}\nΑΛΛΙΩΣ\n  ${0}\nΤΕΛΟΣ_ΑΝ',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'Conditional IF-ELSE structure'
                    },
                    {
                        label: 'ΟΣΟ',
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: 'ΟΣΟ ${1:condition} ΕΠΑΝΑΛΑΒΕ\n  ${0}\nΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'WHILE loop'
                    },
                    {
                        label: 'ΓΙΑ',
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: 'ΓΙΑ ${1:i} ΑΠΟ ${2:1} ΜΕΧΡΙ ${3:10}\n  ${0}\nΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'FOR loop'
                    },
                    {
                        label: 'ΓΙΑ_ΒΗΜΑ',
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: 'ΓΙΑ ${1:i} ΑΠΟ ${2:1} ΜΕΧΡΙ ${3:10} ΜΕ_ΒΗΜΑ ${4:2}\n  ${0}\nΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'FOR loop with STEP'
                    },
                    {
                        label: 'ΑΡΧΗ_ΕΠΑΝΑΛΗΨΗΣ',
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: 'ΑΡΧΗ_ΕΠΑΝΑΛΗΨΗΣ\n  ${0}\nΜΕΧΡΙΣ_ΟΤΟΥ ${1:condition}',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'REPEAT-UNTIL loop'
                    },
                    {
                        label: 'ΕΠΙΛΕΞΕ',
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: 'ΕΠΙΛΕΞΕ ${1:expression}\n  ΠΕΡΙΠΤΩΣΗ ${2:1}\n    ${0}\n  ΠΕΡΙΠΤΩΣΗ ΑΛΛΙΩΣ\n    \nΤΕΛΟΣ_ΕΠΙΛΟΓΩΝ',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'SWITCH-CASE structure'
                    },
                    {
                        label: 'ΓΡΑΨΕ',
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: 'ΓΡΑΨΕ ${0}',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'Output statement'
                    },
                    {
                        label: 'ΔΙΑΒΑΣΕ',
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: 'ΔΙΑΒΑΣΕ ${0}',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'Input statement'
                    }
                ];
                return { suggestions: suggestions };
            }
        });

        // 5. Register Custom Themes
        monaco.editor.defineTheme('glossa-dark', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: 'keyword', foreground: '569CD6', fontStyle: 'bold' },
                { token: 'operator', foreground: 'D4D4D4' },
                { token: 'operator.assignment', foreground: 'DCDCAA', fontStyle: 'bold' },
                { token: 'string', foreground: 'CE9178' },
                { token: 'number', foreground: 'B5CEA8' },
                { token: 'comment', foreground: '6A9955', fontStyle: 'italic' },
                { token: 'constant.language', foreground: '4EC9B0', fontStyle: 'bold' }
            ],
            colors: {
                'editor.background': '#1e1e1e',
                'editor.foreground': '#d4d4d4',
                'editorLineNumber.foreground': '#858585',
                'editorLineNumber.activeForeground': '#c6c6c6',
                'editor.lineHighlightBackground': '#2a2d2e',
                'editor.selectionBackground': '#264f78'
            }
        });

        monaco.editor.defineTheme('glossa-light', {
            base: 'vs',
            inherit: true,
            rules: [
                { token: 'keyword', foreground: '0000FF', fontStyle: 'bold' },
                { token: 'operator', foreground: '000000' },
                { token: 'operator.assignment', foreground: '795E26', fontStyle: 'bold' },
                { token: 'string', foreground: 'A31515' },
                { token: 'number', foreground: '098658' },
                { token: 'comment', foreground: '008000', fontStyle: 'italic' },
                { token: 'constant.language', foreground: '267F99', fontStyle: 'bold' }
            ],
            colors: {
                'editor.background': '#ffffff',
                'editor.foreground': '#000000',
                'editorLineNumber.foreground': '#747474',
                'editorLineNumber.activeForeground': '#000000',
                'editor.lineHighlightBackground': '#f0f0f0',
                'editor.selectionBackground': '#add6ff'
            }
        });

        // 6. Register Document Formatting Edit Provider for ΓΛΩΣΣΑ
        monaco.languages.registerDocumentFormattingEditProvider('glossa', {
            provideDocumentFormattingEdits: function (model, options, token) {
                const text = model.getValue();
                const formatted = formatGlossaCode(text, options);
                return [
                    {
                        range: model.getFullModelRange(),
                        text: formatted
                    }
                ];
            }
        });

        isConfigured = true;
    }

    /**
     * Formats ΓΛΩΣΣΑ pseudocode with consistent block indentation and clean spacing.
     */
    function formatGlossaCode(source, options) {
        options = options || {};
        const tabSize = options.tabSize || 4;
        const indentStr = options.insertSpaces !== false ? ' '.repeat(tabSize) : '\t';
        const lines = source.split(/\r?\n/);
        const result = [];
        let currentIndent = 0;

        for (let i = 0; i < lines.length; i++) {
            const rawLine = lines[i];
            const trimmed = rawLine.trim();

            if (trimmed === '') {
                result.push('');
                continue;
            }

            // Full line comment
            if (trimmed.startsWith('!')) {
                result.push(indentStr.repeat(currentIndent) + trimmed);
                continue;
            }

            // Split code and trailing comment (ignoring strings)
            let inSingleQuote = false;
            let inDoubleQuote = false;
            let commentStart = -1;
            for (let c = 0; c < trimmed.length; c++) {
                const ch = trimmed[c];
                if (ch === '\'' && !inDoubleQuote) inSingleQuote = !inSingleQuote;
                else if (ch === '"' && !inSingleQuote) inDoubleQuote = !inDoubleQuote;
                else if (ch === '!' && !inSingleQuote && !inDoubleQuote) {
                    commentStart = c;
                    break;
                }
            }

            let codePart = commentStart >= 0 ? trimmed.substring(0, commentStart).trim() : trimmed;
            const commentPart = commentStart >= 0 ? ' ' + trimmed.substring(commentStart).trim() : '';

            // Clean assignment operator spacing outside strings
            if (!codePart.includes('\'') && !codePart.includes('"')) {
                codePart = codePart.replace(/([^\s<])<-(?!>)/g, '$1 <-').replace(/(?<!<)<-(?!\s)/g, '<- ');
            }

            const upper = codePart.toUpperCase();
            const firstWord = upper.split(/[\s:(]/)[0];

            // 1. Block Closers (decrease indent before placing line)
            if (firstWord === 'ΤΕΛΟΣ_ΑΝ' || firstWord === 'ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ' ||
                firstWord === 'ΜΕΧΡΙΣ_ΟΤΟΥ' || firstWord === 'ΤΕΛΟΣ_ΕΠΙΛΟΓΩΝ') {
                currentIndent = Math.max(0, currentIndent - 1);
                result.push(indentStr.repeat(currentIndent) + codePart + commentPart);
            }
            else if (firstWord === 'ΤΕΛΟΣ_ΑΛΓΟΡΙΘΜΟΥ' || firstWord === 'ΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ' ||
                     firstWord === 'ΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ' || firstWord === 'ΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ' ||
                     firstWord === 'ΤΕΛΟΣ') {
                currentIndent = 0;
                result.push(codePart + commentPart);
            }
            // 2. Mid-block keywords (decrease indent for this line, indent following lines)
            else if (firstWord === 'ΑΛΛΙΩΣ' || firstWord === 'ΑΛΛΙΩΣ_ΑΝ' || firstWord === 'ΠΕΡΙΠΤΩΣΗ') {
                const lineIndent = Math.max(0, currentIndent - 1);
                result.push(indentStr.repeat(lineIndent) + codePart + commentPart);
            }
            // 3. Section Headers (placed at base indent 0, next lines indented by 1)
            else if (firstWord === 'ΜΕΤΑΒΛΗΤΕΣ' || firstWord === 'ΣΤΑΘΕΡΕΣ' || firstWord === 'ΑΡΧΗ') {
                currentIndent = 0;
                result.push(codePart + commentPart);
                currentIndent = 1;
            }
            // 4. Subprogram Openers (placed at base indent 0, next lines indented by 1)
            else if (firstWord === 'ΑΛΓΟΡΙΘΜΟΣ' || firstWord === 'ΠΡΟΓΡΑΜΜΑ' ||
                     firstWord === 'ΔΙΑΔΙΚΑΣΙΑ' || firstWord === 'ΣΥΝΑΡΤΗΣΗ') {
                currentIndent = 0;
                result.push(codePart + commentPart);
                currentIndent = 1;
            }
            // 5. Control Structure Openers (placed at current indent, next lines indented +1)
            else if (upper.includes(' ΤΟΤΕ') || upper.endsWith('ΤΟΤΕ')) {
                result.push(indentStr.repeat(currentIndent) + codePart + commentPart);
                currentIndent++;
            }
            else if (upper.includes(' ΕΠΑΝΑΛΑΒΕ') || upper.endsWith('ΕΠΑΝΑΛΑΒΕ')) {
                result.push(indentStr.repeat(currentIndent) + codePart + commentPart);
                currentIndent++;
            }
            else if (firstWord === 'ΓΙΑ' && upper.includes(' ΑΠΟ ') && upper.includes(' ΜΕΧΡΙ ')) {
                result.push(indentStr.repeat(currentIndent) + codePart + commentPart);
                currentIndent++;
            }
            else if (firstWord === 'ΑΡΧΗ_ΕΠΑΝΑΛΗΨΗΣ' || firstWord === 'ΕΠΙΛΕΞΕ') {
                result.push(indentStr.repeat(currentIndent) + codePart + commentPart);
                currentIndent++;
            }
            // 6. Normal executable statements or declarations
            else {
                result.push(indentStr.repeat(currentIndent) + codePart + commentPart);
            }
        }

        return result.join('\n');
    }

    window.monacoInterop = {
        initialize: function (containerId, initialTabId, initialContent, theme, dotnetRef) {
            return new Promise((resolve) => {
                dotnetRefHolder = dotnetRef;

                // Load Monaco using AMD require loader
                require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs' } });

                require(['vs/editor/editor.main'], function () {
                    configureGlossaLanguage();

                    const container = document.getElementById(containerId);
                    if (!container) {
                        console.error('Monaco container element not found:', containerId);
                        resolve();
                        return;
                    }

                    // Dispose previous instance if existing
                    if (editorInstance) {
                        editorInstance.dispose();
                    }

                    // Create initial model
                    activeTabId = initialTabId || 'default-tab';
                    const initialModel = monaco.editor.createModel(initialContent || '', 'glossa');
                    models.set(activeTabId, initialModel);

                    editorInstance = monaco.editor.create(container, {
                        model: initialModel,
                        theme: theme || 'glossa-dark',
                        fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
                        fontSize: 14,
                        lineHeight: 22,
                        automaticLayout: true,
                        minimap: { enabled: true },
                        wordWrap: 'off',
                        tabSize: 4,
                        scrollBeyondLastLine: false,
                        renderWhitespace: 'selection',
                        bracketPairColorization: { enabled: true },
                        suggestOnTriggerCharacters: true,

                        // CRITICAL: Disable unicode highlighting to remove yellow boxes around Greek characters!
                        unicodeHighlight: {
                            ambiguousCharacters: false,
                            invisibleCharacters: false,
                            nonBasicASCII: false
                        }
                    });

                    // Debounced content change notifications to C#
                    let changeTimeout = null;
                    editorInstance.onDidChangeModelContent(() => {
                        if (changeTimeout) clearTimeout(changeTimeout);
                        changeTimeout = setTimeout(() => {
                            if (dotnetRefHolder && editorInstance) {
                                dotnetRefHolder.invokeMethodAsync('OnEditorContentChanged', activeTabId, editorInstance.getValue());
                            }
                        }, 150);
                    });

                    // Cursor position notifications to C#
                    editorInstance.onDidChangeCursorPosition((e) => {
                        if (dotnetRefHolder) {
                            dotnetRefHolder.invokeMethodAsync('OnCursorPositionChanged', e.position.lineNumber, e.position.column);
                        }
                    });

                    resolve();
                });
            });
        },

        switchTabModel: function (tabId, initialContent) {
            if (!editorInstance || typeof monaco === 'undefined') return;

            let model = models.get(tabId);
            if (!model) {
                model = monaco.editor.createModel(initialContent || '', 'glossa');
                models.set(tabId, model);
            }

            activeTabId = tabId;
            editorInstance.setModel(model);
            editorInstance.focus();
        },

        closeTabModel: function (tabId) {
            if (models.has(tabId)) {
                const model = models.get(tabId);
                models.delete(tabId);
                model.dispose();
            }
        },

        getContent: function () {
            return editorInstance ? editorInstance.getValue() : '';
        },

        setContent: function (content) {
            if (editorInstance) {
                editorInstance.setValue(content || '');
            }
        },

        setTheme: function (themeName) {
            if (typeof monaco !== 'undefined') {
                monaco.editor.setTheme(themeName);
            }
        },

        setMarkers: function (markers) {
            if (!editorInstance || typeof monaco === 'undefined') return;
            const model = editorInstance.getModel();
            if (!model) return;

            const monacoMarkers = (markers || []).map(m => ({
                severity: m.severity === 'Warning' ? monaco.MarkerSeverity.Warning : monaco.MarkerSeverity.Error,
                message: m.message,
                startLineNumber: m.line || 1,
                startColumn: m.column || 1,
                endLineNumber: m.line || 1,
                endColumn: (m.column || 1) + 10
            }));

            monaco.editor.setModelMarkers(model, 'glossa-compiler', monacoMarkers);
        },

        clearMarkers: function () {
            if (!editorInstance || typeof monaco === 'undefined') return;
            const model = editorInstance.getModel();
            if (model) {
                monaco.editor.setModelMarkers(model, 'glossa-compiler', []);
            }
        },

        revealLine: function (line) {
            if (editorInstance) {
                editorInstance.revealLineInCenter(line);
                editorInstance.setPosition({ lineNumber: line, column: 1 });
                editorInstance.focus();
            }
        },

        getCursorPosition: function () {
            if (editorInstance) {
                const pos = editorInstance.getPosition();
                return { line: pos.lineNumber, column: pos.column };
            }
            return { line: 1, column: 1 };
        },

        undo: function () {
            if (editorInstance) editorInstance.trigger('toolbar', 'undo');
        },

        redo: function () {
            if (editorInstance) editorInstance.trigger('toolbar', 'redo');
        },

        formatDocument: function () {
            if (!editorInstance) return;
            const model = editorInstance.getModel();
            if (!model) return;
            try {
                const formatted = formatGlossaCode(model.getValue(), {
                    tabSize: editorInstance.getOptions().get(monaco.editor.EditorOption.tabSize) || 4,
                    insertSpaces: editorInstance.getOptions().get(monaco.editor.EditorOption.insertSpaces) !== false
                });
                editorInstance.executeEdits('format', [{
                    range: model.getFullModelRange(),
                    text: formatted
                }]);
                editorInstance.pushUndoStop();
            } catch (err) {
                console.warn('Formatting failed, falling back to editor action:', err);
                editorInstance.trigger('toolbar', 'editor.action.formatDocument');
            }
        },

        getSelectedText: function () {
            if (!editorInstance) return '';
            const selection = editorInstance.getSelection();
            return editorInstance.getModel().getValueInRange(selection);
        },

        insertText: function (text) {
            if (editorInstance) {
                editorInstance.trigger('keyboard', 'type', { text: text });
            }
        },

        updateOptions: function (options) {
            if (editorInstance) {
                editorInstance.updateOptions({
                    fontSize: options.fontSize || 14,
                    wordWrap: options.wordWrap ? 'on' : 'off',
                    tabSize: options.tabSize || 4,
                    minimap: { enabled: options.minimap !== false },
                    unicodeHighlight: {
                        ambiguousCharacters: false,
                        invisibleCharacters: false,
                        nonBasicASCII: false
                    }
                });
            }
        },

        dispose: function () {
            if (editorInstance) {
                editorInstance.dispose();
                editorInstance = null;
            }
            models.forEach(m => m.dispose());
            models.clear();
            dotnetRefHolder = null;
        }
    };
})();
