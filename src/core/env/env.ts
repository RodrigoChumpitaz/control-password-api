import { config } from "dotenv";
config();

export default class Environtment{
    private static readonly env = process.env;

    public static get PORT(): number{
        return this.env.PORT as unknown as number;
    }

    public static DB_CONFIG(){
        return {
            host: this.env.DB_HOST,
            username: this.env.DB_USERNAME,
            password: this.env.DB_PASSWORD,
            database: this.env.DB_DATABASE,
        }
    }
}