"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presentation = void 0;
class Presentation {
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
