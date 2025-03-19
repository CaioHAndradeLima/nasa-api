
export class InvalidResponseCodeException extends Error {
    constructor(public code: number) {
        super("invalid response code ${code}")
    }
}