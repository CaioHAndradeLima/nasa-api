"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presentation = void 0;
class Presentation {
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
exports.Presentation = Presentation;
//# sourceMappingURL=presentation.js.map