import { Response } from 'express';
import { FetchNasaPicturesUseCase } from "../application/fetch.nasa.pictures.use.case";
export declare class NasaPictureController {
    private readonly fetchPicturesUseCase;
    constructor(fetchPicturesUseCase: FetchNasaPicturesUseCase);
    create(req: Request, response: Response): Promise<Response>;
}
