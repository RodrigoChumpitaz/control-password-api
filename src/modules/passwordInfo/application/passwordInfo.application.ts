import { PasswordInfoRepository } from '@domain/passwordInfo.repository';
import { PasswordInfoListResultApp } from './results/passwordInfo-list';

export type PasswordInfoListResultApplication = PasswordInfoListResultApp[];

export class PasswordInfoApplication{
    constructor(private readonly passwordInfoRepository: PasswordInfoRepository){
    }

    async getAll(): Promise<PasswordInfoListResultApplication>{
        return await this.passwordInfoRepository.getAll();
    }
}