"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidResponseCodeException = void 0;
class InvalidResponseCodeException extends Error {
    code;
    constructor(code) {
        super("invalid response code ${code}");
        this.code = code;
    }
}
exports.InvalidResponseCodeException = InvalidResponseCodeException;
//# sourceMappingURL=invalid.response.code.exception.js.map