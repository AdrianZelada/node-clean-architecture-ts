import * as express from "express";
import { createServer, Server } from 'http';
import { Middleware } from "./middleware";
import { UsersRoutes } from "../routes/user.routes";


export class WebServer {

    app : any;
    middleware:any;
    server:any;

    constructor(){
        this.app = express();
        this.middleware = new Middleware(this.app);
    }

    async start(){
        this.app = await this.middleware.execute();        
        let users =  UsersRoutes.execute(this.app);
        this.server = createServer(this.app);  
        
        return await this.server.listen(this.app.get("port"),async()=>{
            console.log(("Running at http://localhost:%d in %s mode"), this.app.get("port"), this.app.get("env"));
        })
    }
}