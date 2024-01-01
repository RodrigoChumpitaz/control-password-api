interface ErrorDetail {
    status: number;
    source: {
        stack: string;
    };
    type: string;
    detail: string;
}

export class ErrorResponse {
    static errors: ErrorDetail[] = [];

    static addError(
        status: number,
        stack: string,
        type: string,
        detail: string
    ): void {
        const regex = /\(.*?([^\s]+:\d+:\d+)\)/g;
        const matches = stack.match(regex) || [];
        const paths = matches.map((match) => match.replace(/\(|\)/g, '')) || [];
        // console.log("rutas: ",paths)
        // console.log("lista de errores:", this.errors)
        // console.log("stack :", stack)
        this.errors.forEach((error: ErrorDetail) => {
            if(error.source.stack === paths[0]){
                console.log("error repetido")
                this.errors.splice(this.errors.indexOf(error), 1);
            }
        })
        this.errors.push({
            status,
            source: { stack: paths[0] },
            type,
            detail
        });
    }

    static toJSON(): any {
        return {
            errors: this.errors
        };
    }
}
