import Environtment from "@core/env/env";
import { IBootstrap } from "./bootstrap.interface";
import { connect, connection, disconnect } from "mongoose";

export default class DatabaseBootstrap implements IBootstrap{
    init(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const dbConfig = Environtment.DB_CONFIG();
                const db = await connect(`mongodb+srv://${dbConfig.username}:${dbConfig.password}${dbConfig.host}/${dbConfig.database}`)
                connection.on('error', (err) => {
                    console.log(err);
                    reject(err);
                })
                console.log(`Connected to ${db.connection.name}`)
                resolve(db);
            } catch (error) {
                await this.close();
                reject(error);
            }
        })
    }
    async close(): Promise<void> {
        await disconnect();
    }

}