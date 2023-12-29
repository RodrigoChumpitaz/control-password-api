import { Document } from "mongoose";

export class PasswordInfoEntity extends Document{
    id: string;
    passwordHash: string;
    passwordSalt: string;
    sugestedPassword: string;
    active: boolean;

    constructor(id: string, passwordHash: string, passwordSalt: string, sugestedPassword: string, active: boolean){
        super();
        this.id = id;
        this.passwordHash = passwordHash;
        this.passwordSalt = passwordSalt;
        this.sugestedPassword = sugestedPassword;
        this.active = active;
    }
}