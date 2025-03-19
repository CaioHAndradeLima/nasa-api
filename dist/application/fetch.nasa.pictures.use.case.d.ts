import { NasaPicture } from "../domain/nasa.picture";
import { Presentation } from "./presentation";
import { NasaRepository } from "../infrastructure/nasa.picture.repository";
export declare class FetchNasaPicturesUseCase {
    private readonly nasaRepository;
    constructor(nasaRepository: NasaRepository);
    invoke(): Promise<Presentation<NasaPicture[]>>;
}
