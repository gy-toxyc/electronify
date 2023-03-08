/*
 * Electron IPC Interface.
 */

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