import { PasswordInfoListResultApp } from "@useCases/results/passwordInfo-list";
import PasswordInfoEntityDb from '@infra/model/passwordInfo.entity'
import { PasswordInfoEntity } from "@infra/model/passwordInfo";
import { PasswordInfo } from "@domain/passwordInfo.domain";
import { PasswordInfoRepository } from "@domain/passwordInfo.repository";
import { PasswordModelDto } from "./dto/passwod-models-dto";
import { Document } from "mongoose";

export type PasswordInfoListResult = PasswordInfoListResultApp[];
export type PasswordListDb = Document | PasswordInfoEntity[];

export class PasswordInfoInfraestructure implements PasswordInfoRepository{
    async getAll(): Promise<PasswordInfoListResult> {
        try {
            const passwordList: PasswordListDb = await PasswordInfoEntityDb.find();
            return PasswordModelDto.fromDataToApplication(passwordList);
        } catch (error) {
            return error;
        }
    }
    getById(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update(id: string, passwordInfo: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

}