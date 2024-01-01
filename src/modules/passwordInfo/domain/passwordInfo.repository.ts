import { PasswordInfoListResult } from "@core/types/PasswordTypes";

export interface PasswordInfoRepository{
    getAll(): Promise<PasswordInfoListResult>;
    getById(id: string): Promise<any>;
    insert(passwordInfo: any): Promise<any>;
    update(id: string, passwordInfo: any): Promise<any>;
    delete(id: string): Promise<any>;
}