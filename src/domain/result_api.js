"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultApi = void 0;
class ResultApi {
    constructor(body, error) {
        this.body = body;
        this.error = error;
    }
    hasBody() {
        return this.body != null;
    }
    hasError() {
        return this.error != null;
    }
}
exports.ResultApi = ResultApi;
