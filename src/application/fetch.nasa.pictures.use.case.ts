import {NasaPicture} from "../domain/nasa.picture";
import {Presentation} from "./presentation";
import {toPresentation} from "./presentation.convert";
import {NasaRepository} from "../infrastructure/nasa.picture.repository";
import {Injectable} from "@nestjs/common";

@Injectable()
export class FetchNasaPicturesUseCase {

    constructor(private readonly nasaRepository: NasaRepository) {
    }

    async invoke(): Promise<Presentation<NasaPicture[]>> {
        return toPresentation(
            await this.nasaRepository.findPictures()
        )
    }
}
