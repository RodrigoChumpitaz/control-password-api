export interface PasswordInfoInsertResultApp{
    id: string;
    passwordHash: string;
    sugestedPassword: string;
    active: boolean;
    createdAt?: Date;
    updatedAt?: Date | null;
}