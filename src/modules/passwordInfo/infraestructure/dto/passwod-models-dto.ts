import { PasswordInfoEntity } from "@infra/model/passwordInfo";
import { PasswordInfo } from "@domain/passwordInfo.domain";
import { PasswordInfoListResultApp } from '@useCases/results/passwordInfo-list'
import { PasswordInfoInsertResultApp } from "@useCases/results/passwordInfo-insert";

export class PasswordModelDto{
    // static fromDomainToData(passwordInfo: PasswordInfo): PasswordInfoEntity{

    // }

    static fromDataToApplicationList(passwordInfo: PasswordInfoEntity[]): PasswordInfoListResultApp[]{
        return passwordInfo.map((passwordInfo) => {
            return {
                _id: passwordInfo.id,
                passwordHash: passwordInfo.passwordHash,
                sugestedPassword: passwordInfo.sugestedPassword,
                active: passwordInfo.active
            }
        })
    }

    static fromDataToApplication(passwordInfo: PasswordInfoEntity): PasswordInfoInsertResultApp{
        return {
            id: passwordInfo.id,
            passwordHash: passwordInfo.passwordHash,
            sugestedPassword: passwordInfo.sugestedPassword,
            active: passwordInfo.active
        }
    }
}