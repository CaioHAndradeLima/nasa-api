import {Presentation} from "../application/presentation";
import {Response} from "express";
import {HttpStatus} from "@nestjs/common";
import {NasaIOException} from "../exception/nasa.io.exception";
import {InvalidResponseCodeException} from "../exception/invalid.response.code.exception";

export function toRequest<T>(res: Response, presentation: Presentation<T>): Response {
    if (presentation.hasError()) {

        if (presentation.error instanceof InvalidResponseCodeException) {
            return res.status(HttpStatus.BAD_GATEWAY).json({
                'gateway_code': presentation.error.code
            })
        } else if (presentation.error instanceof NasaIOException) {
            return res.status(HttpStatus.BAD_GATEWAY).json()
        } else {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json()
        }
    }

    return res.status(HttpStatus.OK).json(presentation.body)
}