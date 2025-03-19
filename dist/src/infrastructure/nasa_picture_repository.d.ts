import { NasaPicture } from "../domain/nasa_picture";
import { ResultApi } from "../domain/result_api";
export declare class NasaRepository {
    findPictures(): Promise<ResultApi<NasaPicture[]>>;
}
