export declare class Presentation<T> {
    body?: T | undefined;
    error?: Error | undefined;
    constructor(body?: T | undefined, error?: Error | undefined);
    hasBody(): boolean;
    hasError(): boolean;
}
