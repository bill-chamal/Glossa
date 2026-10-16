/**
 * File System, Directory, and Clipboard Interop for Blazor WebAssembly
 * Modern File System Access API with universal fallbacks.
 */
(function () {
    let currentFileHandle = null;

    async function scanDirectoryHandle(dirHandle, relativePath) {
        const items = [];
        for await (const entry of dirHandle.values()) {
            const entryPath = relativePath ? `${relativePath}/${entry.name}` : entry.name;
            if (entry.kind === 'file') {
                // Only consider text or glossa files
                const file = await entry.getFile();
                const content = await file.text();
                items.push({
                    name: entry.name,
                    relativePath: entryPath,
                    isDirectory: false,
                    isExpanded: false,
                    content: content,
                    children: []
                });
            } else if (entry.kind === 'directory') {
                const subItems = await scanDirectoryHandle(entry, entryPath);
                items.push({
                    name: entry.name,
                    relativePath: entryPath,
                    isDirectory: true,
                    isExpanded: true,
                    content: null,
                    children: subItems
                });
            }
        }
        // Sort: directories first, then alphabetically
        items.sort((a, b) => {
            if (a.isDirectory && !b.isDirectory) return -1;
            if (!a.isDirectory && b.isDirectory) return 1;
            return a.name.localeCompare(b.name);
        });
        return items;
    }

    window.fileInterop = {
        /**
         * Opens a file picker dialog and returns { name, content } or null if canceled.
         */
        openFile: async function () {
            if ('showOpenFilePicker' in window) {
                try {
                    const [handle] = await window.showOpenFilePicker({
                        types: [
                            {
                                description: 'Glossa Files (*.glo, *.glossa, *.txt)',
                                accept: {
                                    'text/plain': ['.glo', '.glossa', '.txt']
                                }
                            }
                        ],
                        multiple: false
                    });

                    currentFileHandle = handle;
                    const file = await handle.getFile();
                    const content = await file.text();
                    return { name: file.name, content: content };
                } catch (err) {
                    if (err.name === 'AbortError') return null;
                    console.warn('showOpenFilePicker failed, using fallback:', err);
                }
            }

            // Fallback for browsers without File System Access API
            return new Promise((resolve) => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.glo,.glossa,.txt,text/plain';

                input.onchange = async () => {
                    if (input.files && input.files.length > 0) {
                        const file = input.files[0];
                        const content = await file.text();
                        resolve({ name: file.name, content: content });
                    } else {
                        resolve(null);
                    }
                };

                input.oncancel = () => resolve(null);
                input.click();
            });
        },

        /**
         * Opens a folder directory picker and returns a folder tree structure.
         */
        openDirectory: async function () {
            if ('showDirectoryPicker' in window) {
                try {
                    const dirHandle = await window.showDirectoryPicker();
                    const items = await scanDirectoryHandle(dirHandle, '');
                    return {
                        name: dirHandle.name,
                        items: items
                    };
                } catch (err) {
                    if (err.name === 'AbortError') return null;
                    console.warn('showDirectoryPicker failed, using fallback:', err);
                }
            }

            // Fallback using <input type="file" webkitdirectory>
            return new Promise((resolve) => {
                const input = document.createElement('input');
                input.type = 'file';
                input.webkitdirectory = true;
                input.multiple = true;

                input.onchange = async () => {
                    if (input.files && input.files.length > 0) {
                        const fileList = Array.from(input.files);
                        const rootFolderName = fileList[0].webkitRelativePath.split('/')[0] || 'Project';
                        
                        // Build tree structure
                        const rootItems = [];
                        const dirMap = new Map();

                        for (const file of fileList) {
                            const relPath = file.webkitRelativePath; // e.g. "Root/folder/file.glo"
                            const parts = relPath.split('/').slice(1); // remove root
                            if (parts.length === 0) continue;

                            let currentList = rootItems;
                            let currentPath = '';

                            for (let i = 0; i < parts.length; i++) {
                                const part = parts[i];
                                currentPath = currentPath ? `${currentPath}/${part}` : part;
                                const isLast = i === parts.length - 1;

                                if (isLast) {
                                    const text = await file.text();
                                    currentList.push({
                                        name: part,
                                        relativePath: currentPath,
                                        isDirectory: false,
                                        isExpanded: false,
                                        content: text,
                                        children: []
                                    });
                                } else {
                                    let existingDir = currentList.find(item => item.isDirectory && item.name === part);
                                    if (!existingDir) {
                                        existingDir = {
                                            name: part,
                                            relativePath: currentPath,
                                            isDirectory: true,
                                            isExpanded: true,
                                            content: null,
                                            children: []
                                        };
                                        currentList.push(existingDir);
                                    }
                                    currentList = existingDir.children;
                                }
                            }
                        }

                        // Recursive sort
                        function sortItems(list) {
                            list.sort((a, b) => {
                                if (a.isDirectory && !b.isDirectory) return -1;
                                if (!a.isDirectory && b.isDirectory) return 1;
                                return a.name.localeCompare(b.name);
                            });
                            for (const item of list) {
                                if (item.children) sortItems(item.children);
                            }
                        }
                        sortItems(rootItems);

                        resolve({
                            name: rootFolderName,
                            items: rootItems
                        });
                    } else {
                        resolve(null);
                    }
                };

                input.oncancel = () => resolve(null);
                input.click();
            });
        },

        /**
         * Saves content to the existing file handle or initiates a Save As workflow.
         */
        saveFile: async function (fileName, content) {
            if (currentFileHandle && 'createWritable' in currentFileHandle) {
                try {
                    const writable = await currentFileHandle.createWritable();
                    await writable.write(content);
                    await writable.close();
                    return { success: true, fileName: currentFileHandle.name };
                } catch (err) {
                    console.warn('Direct file save failed, falling back to Save As:', err);
                }
            }
            return await this.saveAsFile(fileName, content);
        },

        /**
         * Prompts the user with a Save As picker dialog or triggers a direct file download.
         */
        saveAsFile: async function (fileName, content) {
            // Synchronously grab latest content from Monaco if available to keep user activation intact
            if (window.monacoInterop && typeof window.monacoInterop.getContent === 'function') {
                try {
                    const latest = window.monacoInterop.getContent();
                    if (latest !== undefined && latest !== null && latest !== '') {
                        content = latest;
                    }
                } catch (e) { }
            }

            if ('showSaveFilePicker' in window) {
                try {
                    const handle = await window.showSaveFilePicker({
                        suggestedName: fileName || 'program.glo',
                        types: [
                            {
                                description: 'Glossa Source File (*.glo, *.glossa, *.txt)',
                                accept: { 'text/plain': ['.glo', '.glossa', '.txt'] }
                            }
                        ]
                    });

                    currentFileHandle = handle;
                    const writable = await handle.createWritable();
                    await writable.write(content);
                    await writable.close();
                    return { success: true, fileName: handle.name };
                } catch (err) {
                    if (err.name === 'AbortError') return { success: false, aborted: true };
                    console.warn('showSaveFilePicker failed, using download fallback:', err);
                }
            }

            // Fallback download via Blob
            const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName || 'program.glo';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            return { success: true, fileName: fileName || 'program.glo' };
        },

        /**
         * Copies text to the system clipboard.
         */
        copyToClipboard: async function (text) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
                return true;
            }
            return false;
        },

        /**
         * Reads text from the system clipboard.
         */
        readFromClipboard: async function () {
            if (navigator.clipboard && navigator.clipboard.readText) {
                return await navigator.clipboard.readText();
            }
            return '';
        }
    };
})();
