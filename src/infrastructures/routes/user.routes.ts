import { Request, Response,Express } from "express";
import { ApplicationRoutes } from "./application.routes";
import { UserController} from '../controllers/user.controller';

export class UsersRoutes extends ApplicationRoutes{
    userCtrl:any = null;
    constructor(public app:Express){
        super(app,{
            endPoint:'/user',
            routes:{
                "/list":"listUsers",
                "post /save":"createdUser",
                "post /organize":"organizeGame"
            }
        });
        this.userCtrl = UserController.getInstance();
    }

    async listUsers(req:Request,res:Response){
        let data = await this.userCtrl.listUsers();
        console.info('datata')
        console.info(data)
        res.json(data);
    }

    async createdUser(req:Request,res:Response){
        let body :any = req.body;
        let data = await this.userCtrl.createdUser(body);
        res.json(data);
    }

    async organizeGame(req:Request,res:Response){
        let body :any = req.body;
        let data = await this.userCtrl.organizeGame(body.participants,body.teams,body.minAge,body.maxAge);
        res.json(data);
    }
}