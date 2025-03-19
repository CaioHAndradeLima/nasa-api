import axios from "axios";
import {NasaPicture} from "@/domain/nasa_picture";
import {v4 as uuidV4} from "uuid";
import {NasaIOException} from "@/exception/nasa_io_exception";
import {ResultApi} from "@/domain/result_api";
import {Injectable} from "@nestjs/common";

@Injectable()
export class NasaRepository {
    async findPictures(): Promise<ResultApi<NasaPicture[]>> {
        try {
            const response = await axios.get(process.env.NASA_URL as string);

            if (response.status !== 200) {
                return new ResultApi<NasaPicture[]>(
                    undefined,
                    new InvalidResponseCodeException(
                        response.status
                    ),
                )
            }

            return new ResultApi<NasaPicture[]>(
                response.data.map((item: any) => new NasaPicture(
                    item.date,
                    item.explanation,
                    item.title,
                    item.url,
                    item.id ?? uuidV4()
                )),
                undefined
            )
        } catch (error) {
            return new ResultApi<NasaPicture[]>(
                undefined,
                new NasaIOException(),
            )
        }
    }
}
