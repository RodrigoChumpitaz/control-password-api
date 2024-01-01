import { Router } from "express";
import { PasswordInfoController } from "./passwordInfo.controller";

class PasswordInfoRoute{
    router: Router;
    controller: PasswordInfoController;

    constructor(){
        this.router = Router();
        this.controller = new PasswordInfoController();
        this.routes();
    }

    routes(){
        this.router.get('/getAll', this.controller.getAll)
        this.router.post('/insert', this.controller.insert)
    }
}

export default new PasswordInfoRoute().router;