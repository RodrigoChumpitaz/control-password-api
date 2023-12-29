import { IBootstrap } from "./bootstrap.interface";
import { connect, connection, disconnect } from "mongoose";

export default class DatabaseBootstrap implements IBootstrap{
    init(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await connect('mongodb+srv://Rodrigo03:kz8qMQrbpdnp4KYh@freecluster.dw9jl.mongodb.net/controlPassword')
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