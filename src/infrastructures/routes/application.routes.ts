import { Response, Router, Express} from "express";

interface ExtendRoutes{
    endPoint:string,
    routes:any
}

export class ApplicationRoutes{
    router:Router;
    constructor(public app : Express, public extendRoute?:ExtendRoutes){
        this.router = Router();
        this.registerRoutes();
        this.app.use(this.extendRoute.endPoint,this.router);
    }

    registerRoutes() {
        if(this.extendRoute.routes){
            let routes = Object.assign({},this.extendRoute.routes);
            let _this:any=this;
            Object.keys(routes).forEach((path) => {
                let ctrl = routes[path];
                let verb = path.split(' ').length > 1 ? path.split(' ')[0] : 'get';
                let newPath = path.split(' ').length > 1 ? path.split(' ')[1] : path;
                verb = verb.toLowerCase();
                _this.router[verb](newPath, _this[ctrl].bind(_this));
            });
        }
    }

    handleError(res:Response) {
        return function(error:any) {
            return res.status(500).json(error);
        }
    }

    static execute <T extends ApplicationRoutes>( app : Express): T {
        let t = new this(app);
        return <T>t;
    }
}

