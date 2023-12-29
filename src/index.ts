import { ServerBoostrap } from "@server/server";
import DatabaseBootstrap from "@server/database.bootstrap";
import app from "./app";

(async () => {
    const server = new ServerBoostrap(app);
    const database = new DatabaseBootstrap();
    try {
        await Promise.all([server.init(), database.init()]);
    } catch (error) {
        console.log(error);
        server.close();   
    }
})()