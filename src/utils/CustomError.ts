export class CustomError extends Error {
    type: string = 'Internal Server Error';
    errorCode: number = 500;
    detail: string = 'Internal Server Error';

    constructor(detail?: string, errorCode?: number, type?: string){
        super(detail);
        this.type = type!;
        this.errorCode = errorCode!;
        this.detail = detail!;
        this.name = type != undefined ? this.type : this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}