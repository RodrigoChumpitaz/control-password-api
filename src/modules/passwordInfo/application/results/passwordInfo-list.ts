export interface PasswordInfoListResultApp{
    _id: string;
    passwordHash: string;
    passwordSalt: string;
    sugestedPassword: string;
    active: boolean;
}