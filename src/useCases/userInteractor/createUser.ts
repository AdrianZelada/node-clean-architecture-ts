import { User } from "../../interfaces/entities/user";
import { UserRepository } from "../../interfaces/repositories/user.repository";

export default class CreateUser{
    constructor (private userRepository:UserRepository){ }
    async execute(user:User){
        return await this.userRepository.add(user);
    }
}