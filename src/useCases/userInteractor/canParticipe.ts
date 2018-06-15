import { UserEntity } from "../../core/entities/user";

export default class CanParticipate
{
    constructor (private userRepository:any){ }

    async execute(id:string,minAge:number,maxAge:number){
        let user:any = await this.userRepository.getById(id);    
        let subject :UserEntity = new UserEntity(user);        
        
        return {            
            user:subject,
            status:subject.isCorrectAge(minAge,maxAge)
        };      
        
    }
}