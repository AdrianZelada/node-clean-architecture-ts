import { User } from "../../interfaces/entities/user";

export default class CreateUser{
    
    constructor (private userRepository:any){ }

    async execute(user:User){
        return await this.userRepository.add(user);
    }
}