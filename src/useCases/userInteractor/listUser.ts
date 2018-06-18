import { UserRepository } from "../../interfaces/repositories/user.repository";

export default class ListUser{
    
    constructor (private userRepository:UserRepository){ }

    async execute(){        
        return await this.userRepository.list()
    }
}