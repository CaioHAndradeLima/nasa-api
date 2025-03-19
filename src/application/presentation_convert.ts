import {ResultApi} from "../domain/result_api";
import {Presentation} from "../application/presentation";

export function toPresentation<T>(resultApi: ResultApi<T>): Presentation<T> {
    return new Presentation<T>(
        resultApi.body,
        resultApi.error
    )
}