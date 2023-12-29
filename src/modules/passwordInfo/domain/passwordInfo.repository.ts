import { PasswordInfoListResult } from "@infra/password.infraestructure";

export interface PasswordInfoRepository{
    getAll(): Promise<PasswordInfoListResult>;
    getById(id: string): Promise<any>;
    update(id: string, passwordInfo: any): Promise<any>;
}