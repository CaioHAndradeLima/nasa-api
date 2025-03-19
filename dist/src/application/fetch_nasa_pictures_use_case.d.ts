import { NasaPicture } from "../domain/nasa_picture";
import { Presentation } from "./presentation";
import { NasaRepository } from "../infrastructure/nasa_picture_repository";
export declare class FetchNasaPicturesUseCase {
    private readonly nasaRepository;
    constructor(nasaRepository: NasaRepository);
    invoke(): Promise<Presentation<NasaPicture[]>>;
}
