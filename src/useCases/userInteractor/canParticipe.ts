import { UserEntity } from "../../core/entities/user";
import { UserRepository } from "../../interfaces/repositories/user.repository";

export default class CanParticipate
{
    constructor (private userRepository:UserRepository){ }

    async execute(id:string,minAge:number,maxAge:number){
        let user:any = await this.userRepository.getById(id);    
        let subject :UserEntity = new UserEntity(user);        
        
        return {            
            user:subject,
            status:subject.isCorrectAge(minAge,maxAge)
        };      
        
    }
}