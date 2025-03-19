import {ResultApi} from "../domain/result.api";
import {Presentation} from "./presentation";

export function toPresentation<T>(resultApi: ResultApi<T>): Presentation<T> {
    return new Presentation<T>(
        resultApi.body,
        resultApi.error
    )
}