export interface PasswordOptionals {
    readonly active: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date | null;
}
export interface PasswordRequireds {
    readonly id: string;
    readonly passwordHash: string;
    readonly passwordSalt: string;
    readonly sugestedPassword: string;
}

export type PasswordProperties = Partial<PasswordOptionals> & PasswordRequireds;

export class PasswordInfo{
    public readonly id: string;
    public passwordHash: string;
    public passwordSalt: string;
    public sugestedPassword: string;
    public active: boolean;
    public readonly createdAt: Date;
    public updatedAt: Date | null;

    constructor(properties: PasswordProperties){
        this.active = true
        Object.assign(this, properties);
    }


    get properties(): PasswordProperties{
        return {
            id: this.id,
            passwordHash: this.passwordHash,
            passwordSalt: this.passwordSalt,
            sugestedPassword: this.sugestedPassword,
            active: this.active,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}