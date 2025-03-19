import {Controller, Get, Req, Res, HttpStatus} from "@nestjs/common";
import {Response} from 'express';
import {FetchNasaPicturesUseCase} from "../application/fetch.nasa.pictures.use.case";
import {toRequest} from "./request.convert";

@Controller('picture')
export class NasaPictureController {

    constructor(
        private readonly fetchPicturesUseCase: FetchNasaPicturesUseCase,
    ) {
    }

    @Get()
    async create(
        @Req() req: Request,
        @Res() response: Response,
    ): Promise<Response> {
        try {
            return toRequest(
                response, await this.fetchPicturesUseCase.invoke()
            )
        } catch (exception: any) {
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json();
        }
    }
}