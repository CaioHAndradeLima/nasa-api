import {NasaPicture} from "@/domain/nasa_picture";
import {Presentation} from "@/application/presentation";
import {toPresentation} from "@/application/presentation_convert";
import {NasaRepository} from "@/infrastructure/nasa_picture_repository";
import {Injectable} from "@nestjs/common";

@Injectable()
export class FetchNasaPicturesUseCase {
    private nasaRepository: NasaRepository;

    constructor(nasaRepository: NasaRepository) {
        this.nasaRepository = nasaRepository;
    }

    async invoke(): Promise<Presentation<NasaPicture[]>> {
        return toPresentation(
            await this.nasaRepository.findPictures()
        )
    }
}
