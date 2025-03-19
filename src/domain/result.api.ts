export class ResultApi<T> {
    constructor(
        public body?: T,
        public error?: Error
    ) {
    }

    hasBody(): boolean {
        return this.body != null;
    }

    hasError(): boolean {
        return this.error != null;
    }
}
