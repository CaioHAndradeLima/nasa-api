import {Module} from "@nestjs/common";
import {FetchNasaPicturesUseCase} from "../application/fetch.nasa.pictures.use.case";
import {NasaRepository} from "../infrastructure/nasa.picture.repository";
import {NasaPictureController} from "./nasa.picture.controller";

@Module({
    imports: [],
    providers: [
        //repositories
        NasaRepository,
        //use cases
        FetchNasaPicturesUseCase,
    ],
    controllers: [NasaPictureController],
})
export class NasaPictureModule {}