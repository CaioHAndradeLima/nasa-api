import {Controller, Get, Req, Res, HttpStatus} from "@nestjs/common";
import {FetchNasaPicturesUseCase} from "@/application/fetch_nasa_pictures_use_case";
import {Response} from 'express';
import {toRequest} from "@/presentation/request_convert";

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
        } catch (exception) {
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json();
        }
    }
}