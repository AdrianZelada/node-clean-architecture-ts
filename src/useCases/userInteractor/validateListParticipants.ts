import CanParticipate from "./canParticipe";
import { UserEntity } from "../../core/entities/user";

export default class ValidateListParticipants
{
    constructor (private userRepository:any, private canParticipate:CanParticipate){ }

    async execute(participants:Array<string>,minAge:number,maxAge:number){
        let listParticipants: Array<UserEntity>= [];
        let notValidParticipants: Array<UserEntity>= [];
        participants.forEach(async (id:string)=>{
            let participant = await this.canParticipate.execute(id,minAge,maxAge);
            if(participant.status){
                listParticipants.push(participant.user);             
            }else{
                notValidParticipants.push(participant.user);
            }
        })    
        return {
            validParticipants:listParticipants,
            notValidParticipants:notValidParticipants
        }                             
    }
}