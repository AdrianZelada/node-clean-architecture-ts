import ListUser from "../../useCases/userInteractor/listUser";
import User from "../../repositories/schemas/user";
import { Singleton } from "../../core/util/singleton";
import CreateUser from "../../useCases/userInteractor/createUser";

export class UserController extends Singleton{
    
    constructor() {        
        super();        
    }
    
    async listUsers(){
        let list = new ListUser(User);                 
        let data = await list.execute();        
        return data;        
    }

    async createdUser(data:any){
        let created = new CreateUser(User);
        return await created.execute(data);
    }

}