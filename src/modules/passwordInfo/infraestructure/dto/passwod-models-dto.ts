import { PasswordInfoEntity } from "@infra/model/passwordInfo";
import { PasswordInfo } from "@domain/passwordInfo.domain";
import { PasswordInfoListResultApp } from '@useCases/results/passwordInfo-list'

export class PasswordModelDto{
    // static fromDomainToData(passwordInfo: PasswordInfo): PasswordInfoEntity{

    // }

    static fromDataToApplication(passwordInfo: PasswordInfoEntity[]): PasswordInfoListResultApp[]{
        return passwordInfo.map((passwordInfo) => {
            return {
                _id: passwordInfo.id,
                passwordHash: passwordInfo.passwordHash,
                passwordSalt: passwordInfo.passwordSalt,
                sugestedPassword: passwordInfo.sugestedPassword,
                active: passwordInfo.active
            }
        })
    }
}