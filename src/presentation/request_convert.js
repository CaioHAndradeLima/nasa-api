"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRequest = toRequest;
const common_1 = require("@nestjs/common");
const nasa_io_exception_1 = require("../exception/nasa_io_exception");
function toRequest(res, presentation) {
    if (presentation.hasError()) {
        if (presentation.error instanceof InvalidResponseCodeException) {
            return res.status(common_1.HttpStatus.BAD_GATEWAY).json({
                'gateway_code': presentation.error.code
            });
        }
        else if (presentation.error instanceof nasa_io_exception_1.NasaIOException) {
            return res.status(common_1.HttpStatus.BAD_GATEWAY).json();
        }
        else {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json();
        }
    }
    return res.status(common_1.HttpStatus.OK).json(presentation.body);
}
