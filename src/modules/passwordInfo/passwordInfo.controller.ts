import { PasswordInfoInfraestructure } from "@infra/password.infraestructure";
import { PasswordInfoApplication } from './application/passwordInfo.application';
import { Request, Response } from "express";
import { PasswordInfoFactory, PasswordInfoResult } from "@domain/passwordInfo.factory";
import { ErrorResponse } from '../../utils/ErrorResponse';
import { CustomError } from "@utils/CustomError";

const passwordInfoInfraestructure = new PasswordInfoInfraestructure();
const passwordInfoApplication = new PasswordInfoApplication(passwordInfoInfraestructure);

export class PasswordInfoController{
    constructor(){
        this.getAll = this.getAll.bind(this);
        this.insert = this.insert.bind(this);
    }

    async getAll(req: Request, res: Response){
        const passwordInfoList = await passwordInfoApplication.getAll();
        return res.status(200).json(passwordInfoList);
    }

    async insert(req: Request, res: Response){
        const { sugestedPassword } = req.body;
        const passwordInfoFactory: PasswordInfoResult = PasswordInfoFactory.create(sugestedPassword);
        if(passwordInfoFactory instanceof CustomError){
            return res.status(passwordInfoFactory.errorCode).json(ErrorResponse.toJSON());
        }
        const passwordInfoResult: PasswordInfoApplication = await passwordInfoApplication.insert(passwordInfoFactory);
        if(passwordInfoResult instanceof CustomError){
            return res.json(ErrorResponse.toJSON());
        }
        return res.status(201).json(passwordInfoResult);
    }
}