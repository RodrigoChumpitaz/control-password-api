import { IBootstrap } from '@server/bootstrap.interface';
import http from 'http';
import { Application } from 'express';

export class ServerBoostrap implements IBootstrap{

    constructor(private app: Application){
    }

    init(): Promise<any> {
        return new Promise((resolve, reject) => {
            const server = http.createServer(this.app);
            server
                .listen(3000)
                .on("listening",() => {
                    console.log('server running on port 3000');
                    resolve('server running on port 3000');
                })
                .on("error", (err) => {
                    console.log(err);
                    reject(err);
                })
        })
    }
    close(): void {
        process.exit(1);
    }

}