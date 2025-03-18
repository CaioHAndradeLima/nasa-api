import {Module} from "@nestjs/common";
import {FetchNasaPicturesUseCase} from "@/application/fetch_nasa_pictures_use_case";
import {NasaRepository} from "@/infrastructure/nasa_picture_repository";
import {NasaPictureController} from "@/presentation/nasa_picture_controller";

@Module({
    imports: [],
    providers: [
        //use cases
        FetchNasaPicturesUseCase,
        //repositories
        NasaRepository,
    ],
    controllers: [NasaPictureController],
})
export class NasaPictureModule {}