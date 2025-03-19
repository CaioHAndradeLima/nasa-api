"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPresentation = toPresentation;
const presentation_1 = require("./presentation");
function toPresentation(resultApi) {
    return new presentation_1.Presentation(resultApi.body, resultApi.error);
}
