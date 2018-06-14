import { UserRepository } from "../../interfaces/repositories/user.repository";
import { IUserModel } from "../../repositories/schemas/user";


export default class ListUser{
    
    constructor (private userRepository:any){ }

    async execute(){        
        return await this.userRepository.list()
    }
}