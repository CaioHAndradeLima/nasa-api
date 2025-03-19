"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NasaPicture = void 0;
class NasaPicture {
    constructor(date, explanation, title, url, id) {
        this.date = date;
        this.explanation = explanation;
        this.title = title;
        this.url = url;
        this.id = id;
    }
    validate() {
        if (!this.date || !this.explanation || !this.title || !this.url || !this.id) {
            throw new Error("All fields are required");
        }
    }
}
exports.NasaPicture = NasaPicture;
