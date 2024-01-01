import { PasswordInfoRepository } from '@domain/passwordInfo.repository';
import { PasswordInfo } from '@domain/passwordInfo.domain';
import { EncryptService } from './services/encrypt-password.service';
import { PasswordInfoListResultApplication } from '@core/types/PasswordTypes';
import { CustomError } from '@utils/CustomError';
import { ErrorResponse } from '@utils/ErrorResponse';



export class PasswordInfoApplication{
    private readonly regexPasswordHashSalt = /^\$2[ayb]\$.{56}$/;
    constructor(private readonly passwordInfoRepository: PasswordInfoRepository){
    }

    async getAll(): Promise<PasswordInfoListResultApplication>{
        return await this.passwordInfoRepository.getAll();
    }

    async insert(passwordInfo: PasswordInfo): Promise<any>{
        passwordInfo.passwordHash = await EncryptService.encryptPassword(passwordInfo.sugestedPassword)
        if(!this.regexPasswordHashSalt.test(passwordInfo.passwordHash)){
            let error = new CustomError(`La contraseña encriptada no cumple con el siguiente patron: ${this.regexPasswordHashSalt}`, 400, 'PasswordInfoFactory')
            ErrorResponse.addError(
                error.errorCode,
                error.stack!,
                error.name,
                error.detail
            )
            return error as Error;
        }
        return await this.passwordInfoRepository.insert(passwordInfo);
    }
}