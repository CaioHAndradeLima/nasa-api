"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultApi = void 0;
class ResultApi {
    body;
    error;
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
//# sourceMappingURL=result_api.js.map