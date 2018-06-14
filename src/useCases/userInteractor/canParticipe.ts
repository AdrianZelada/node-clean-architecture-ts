import { User } from "../../interfaces/entities/user";
import { UserEntity } from "../../core/entities/user";

export default class CanParticipate
{
    constructor (private userRepository:any){ }

    async execute(id:string,minAge:number,maxAge:number){
        let subject :UserEntity = await this.userRepository.getById(id);        
        return {
            user:subject,
            status:subject.isCorrectAge(minAge,maxAge)
        };      
        
    }
}