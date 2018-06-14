import { User } from "../../interfaces/entities/user";
import { UserEntity } from "../../core/entities/user";
import ValidateListParticipants from "./validateListParticipants";

export default class SortTeam
{
    constructor (private validateListParticipants:ValidateListParticipants){ }

    async execute(participants:Array<UserEntity>,teams:Array<any>){        
        participants=participants.map((participant:UserEntity)=>{
            return participant.sortTeam(teams);
        });        
        return participants
    }
}