const DEFAULT_DESC      = "";
const DEFAULT_LICENSE   = "ISC";
const DEFAULT_VERSION   = "1.0.0";
const DEFAULT_TEST      = "test";

const INFO_DESC         = "As nothing has been written, a default empty value has been set as the project description.";
const INFO_LICENSE      = "As nothing has been written, a default value ('ISC') has been set as the project license.";
const INFO_VERSION      = "As nothing has been written, a default value ('1.0.0') has been set as the project version.";
const INFO_TEST         = "As nothing has been written, a default value ('test') has been set as the project test command.";

const INVALID_NAME      = "Invalid project name. Special characters or blank spaces are not allowed.";
const INVALID_DESC      = "Invalid project description. Backticks are not allowed.";
const INVALID_LICENSE   = "Invalid license. Only upper case characters are allowed, with a maximum of 4.";
const INVALID_VERSION   = "Invalid version format. Only 'XXXX.XXXX.XXXX' is allowed.";
const INVALID_AUTHOR    = "Invalid author name. Special characters or blank spaces are not allowed.";
const INVALID_TEST      = "Invalid test command. Only lower case characters are allowed. It is recommended to be simple.";
const INVALID_GIT       = "Invalid git repository URL. It must follow the next format: '<user>/<repository>/'.";
const INVALID_PATH      = "Invalid local path. It must follow the next format: ";

export function validateName(name) {
    const validName = /^[a-zA-Z0-9]+$/;

    if(name.match(validName)) {
        return name;
    } else {
        throw INVALID_NAME;
    }
}

export function validateDesc(desc) {
    const validDesc = /^[^`]*$/;

    if(desc.match(validDesc)) {
        return desc;
    } else if(desc.length === 0) {
        console.info(INFO_DESC);
        return DEFAULT_DESC;
    } else {
        throw INVALID_DESC;
    }
}

export function validateLicense(license) {
    const validLicense = /^[A-Z]{0,4}$/;

    if(license.match(validLicense)) {
        return license;
    } else if(license.length === 0) {
        console.info(INFO_LICENSE);
        return DEFAULT_LICENSE;
    } else {
        throw INVALID_LICENSE;
    }
}

export function validateVersion(version) {
    const validVersion = /^[0-9]{0,4}\.[0-9]{0,4}\.[0-9]{0,4}$/;

    if(version.match(validVersion)) {
        return version;
    } else if(version.length === 0) {
        console.info(INFO_VERSION);
        return DEFAULT_VERSION;
    } else {
        throw INVALID_VERSION;
    }
}

export function validateAuthor(author) {
    const validAuthor = /^[a-zA-Z0-9]+$/;

    if(author.match(validAuthor)) {
        return author;
    } else {
        throw INVALID_AUTHOR;
    }
}

export function validateTest(test) {
    const validTest = /^[a-z]*$/;

    if(test.match(validTest)) {
        return test;
    } else if(test.length === 0) {
        console.info(INFO_TEST);
        return DEFAULT_TEST;
    } else {
        throw INVALID_TEST;
    }
}

export function validateGIT(git) {
    const validGIT = /^[a-zA-Z0-9\W*]+\/[a-zA-Z0-9\W*]+$/;

    if(git.match(validGIT)) {
        return git;
    } else {
        throw INVALID_GIT;
    }
}

export function validatePath(path) {
    const validPath = /^[a-zA-Z0-9]+$/;      // TODO. Create the RegEx.

    if(path.match(validPath)) {
        return path;
    } else {
        throw INVALID_PATH;
    }
}