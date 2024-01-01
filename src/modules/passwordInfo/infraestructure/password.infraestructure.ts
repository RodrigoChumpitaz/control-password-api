import PasswordInfoEntityDb from '@infra/model/passwordInfo.entity'
import { PasswordInfoEntity } from "@infra/model/passwordInfo";
import { PasswordInfoRepository } from "@domain/passwordInfo.repository";
import { PasswordModelDto } from './dto/passwod-models-dto';
import { PasswordInfoListResult, PasswordListDb } from "@core/types/PasswordTypes";
import { PasswordInfoInsertResultApp } from '@useCases/results/passwordInfo-insert';

export class PasswordInfoInfraestructure implements PasswordInfoRepository{
    async getAll(): Promise<PasswordInfoListResult> {
        try {
            const passwordList: PasswordListDb = await PasswordInfoEntityDb.find();
            return PasswordModelDto.fromDataToApplicationList(passwordList);
        } catch (error) {
            return error;
        }
    }
    getById(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async insert(passwordInfo: PasswordInfoEntity): Promise<PasswordInfoInsertResultApp> {
        try {
            const passwordInfoEntity = new PasswordInfoEntityDb(passwordInfo);
            await passwordInfoEntity.save();
            return PasswordModelDto.fromDataToApplication(passwordInfo);
        } catch (error) {
            return error;
        }
    }
    update(id: string, passwordInfo: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}