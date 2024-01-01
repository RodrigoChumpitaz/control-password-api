import { Document } from "mongoose";

export class PasswordInfoEntity extends Document{
    id: string;
    passwordHash: string;
    sugestedPassword: string;
    active: boolean;

    constructor(id: string, passwordHash: string, sugestedPassword: string, active: boolean){
        super();
        this.id = id;
        this.passwordHash = passwordHash;
        this.sugestedPassword = sugestedPassword;
        this.active = active;
    }
}