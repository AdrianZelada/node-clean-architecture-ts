import * as bodyParser from "body-parser";
import * as path from "path";
import { Express, Router} from "express";
import * as express from "express";
import { default as config} from '../config/config';

import * as coBrow from 'console-serv-brow';

console.log(coBrow)
export class Middleware{
    app :Express;
    constructor(app : Express){
        this.app=app;
    }

    async execute(){
        await this.port();

        coBrow(this.app,{
            pathRoute:'/logs',
        })
        await this.cors();
        await this.bodyParser();
        await this.statics();
        return this.app;
    }

    async port(){
        this.app.set("port", config.port);
        return ;
    }

    async cors(){
        this.app.use((req, res, next) => {       // Enable Cross-Origin Resource Sharing (CORS)
            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, content-type, Accept, Authorization, x-api-key")
            next()
        }); 
        return ;
    }

    async bodyParser(){
        this.app.use(bodyParser.json({limit: '50mb'}));
        this.app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
        return ;
    }

    async statics(){
        this.app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));
        this.app.use(express.static(path.join(__dirname, "uploads"), { maxAge: 31557600000 }));
        return ;

    }
}