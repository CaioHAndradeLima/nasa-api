
class InvalidResponseCodeException extends Error {
    constructor(public code: number) {
        super()
    }
}