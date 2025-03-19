import {NasaPicture} from "../domain/nasa_picture";
import {Presentation} from "./presentation";
import {toPresentation} from "./presentation_convert";
import {NasaRepository} from "../infrastructure/nasa_picture_repository";
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
