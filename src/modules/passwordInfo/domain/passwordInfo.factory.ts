import { PasswordInfo, PasswordProperties } from "./passwordInfo.domain";
import { ErrorResponse } from '@utils/ErrorResponse';
import { CustomError } from '@utils/CustomError';
import logger from "@core/middlewares/logger";

export type PasswordInfoResult = PasswordInfo | Error | any;

export class PasswordInfoFactory{
    static readonly regexPasswordSugested = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.#?!@$%^&*-]).{8,}$/;

    static create(
        sugestedPassword: string,
    ): PasswordInfoResult{
        if(!this.regexPasswordSugested.test(sugestedPassword)){
            let error = new CustomError(`La contraseña /${sugestedPassword}/ no cumple con el siguiente patron: ${this.regexPasswordSugested}`, 400, 'PasswordInfoFactory')
            ErrorResponse.addError(
                error.errorCode,
                error.stack!,
                error.name,
                error.detail
            )
            logger(error);
            return error as Error;
        }
        const properties: PasswordProperties = {
            sugestedPassword
        }

        return new PasswordInfo(properties)
    }
}