import bcrypt from 'bcrypt' 

export class EncryptService{
    static async encryptPassword(password: string): Promise<string>{
        return await bcrypt.hash(password, 10);
    }

    static async comparePassword(password: string, passwordHash: string): Promise<boolean>{
        return await bcrypt.compare(password, passwordHash);
    }
}