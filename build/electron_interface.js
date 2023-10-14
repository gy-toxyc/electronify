/*
 * Electron IPC Interface.
 */

/**
 * Creates a directory using NodeJS.
 * @param {String} name Relative or absolute path of the directory.
 */
export function createDir(name) {
    window.databridge.createDir(name);
}

/**
 * Creates a file using NodeJS.
 * @param {String} name Relative path and name of the file.
 * @param {String} content Content of the file.
 */
export function createFile(name, content) {
    window.databridge.createFile(name, content);
}

/**
 * Reads a file using NodeJS.
 * @param {String} name Relative path and name of the file.
 * @returns {Promise<any>} Promise with the readable content of the file.
 */
export function readFile(name) {
    return window.databridge.readFile(name);
}

/**
 * Removes a file using NodeJS.
 * @param {String} name Relative path and name of the file.
 */
export function removeFile(name) {
    return window.databridge.removeFile(name);
}

/**
 * Executes a command in the shell.
 * @param {String} command Main command.
 */
export function execute(command) {
    window.databridge.cmdexec(command);
}