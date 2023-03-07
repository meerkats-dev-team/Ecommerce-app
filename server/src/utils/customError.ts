export default class CustomError extends Error {
    status: number;
    path?: string;
    code?: unknown

    constructor(status: number, message: string, path?: string, code?: unknown) {
        super(message);
        this.status = status;
        this.path = path;
        this.code = code
    }
}