"use strict";
class InvalidResponseCodeException extends Error {
    constructor(code) {
        super();
        this.code = code;
    }
}
