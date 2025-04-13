import { NasaPicture } from "../domain/nasa.picture";
import { ResultApi } from "../domain/result.api";
export declare class NasaRepository {
    findPictures(): Promise<ResultApi<NasaPicture[]>>;
}
