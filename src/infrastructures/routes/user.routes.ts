import { Router, Request, Response,Express } from "express";
import {default as User} from '../../repositories/schemas/user';
import {default as ListUser} from "../../useCases/userInteractor/listUser";
import { ApplicationRoutes } from "./application.routes";
import { UserController} from '../controllers/user.controller';

export class UsersRoutes extends ApplicationRoutes{    
    userCtrl:any = null;
    constructor(public app:Express){    
        
        super(app,{
            endPoint:'/user',
            routes:{
                "/list":"listUsers",
                "post /save":"createdUser"
            }
        })

        this.userCtrl = UserController.getInstance();                    
    }   

    async listUsers(req:Request,res:Response){
        let data = await this.userCtrl.listUsers();
        res.json(data);
    }

    async createdUser(req:Request,res:Response){
        let body :any = req.body;
        let data = await this.userCtrl.createdUser(body);
        res.json(data);
    }
}