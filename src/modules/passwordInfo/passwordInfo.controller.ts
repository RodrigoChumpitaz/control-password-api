import { PasswordInfoInfraestructure } from "@infra/password.infraestructure";
import { PasswordInfoApplication } from './application/passwordInfo.application';
import { Request, Response } from "express";

const passwordInfoInfraestructure = new PasswordInfoInfraestructure();
const passwordInfoApplication = new PasswordInfoApplication(passwordInfoInfraestructure);

export class PasswordInfoController{
    constructor(){
        this.getAll = this.getAll.bind(this);
    }

    async getAll(req: Request, res: Response){
        const passwordInfoList = await passwordInfoApplication.getAll();
        return res.status(200).json(passwordInfoList);
    }
}