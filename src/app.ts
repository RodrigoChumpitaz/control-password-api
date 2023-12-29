import express, { Application } from "express";
import morgan from "morgan";
import passwordInfoRoutes from "./modules/passwordInfo/passwordInfo.routes";

class App{
    app: Application

    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(morgan('dev'))
    }

    routes(){
        this.app.use('/api/v1/passwordInfo', passwordInfoRoutes)
    }
}

export default new App().app;