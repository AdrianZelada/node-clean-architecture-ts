import CanParticipate from "./canParticipe";
import { UserEntity } from "../../core/entities/user";

export default class ValidateListParticipants
{
    constructor (private canParticipate:CanParticipate){ }

    async execute(participants:Array<string>,minAge:number,maxAge:number){
        let listParticipants: Array<UserEntity>= [];
        let notValidParticipants: Array<UserEntity>= [];
        let participantsObj = await participants.reduce(async(result:any,id:string)=>{
            let docs = await result;
            let participant = await this.canParticipate.execute(id,minAge,maxAge);
            if(participant.status){
                docs.validParticipants = docs.validParticipants || []
                docs.validParticipants.push(participant.user);
            }else{
                docs.notValidParticipants = docs.notValidParticipants || []
                docs.notValidParticipants.push(participant.user);
            }
            return docs;
        },{
            validParticipants:[],
            notValidParticipants:[]
        })
        return await participantsObj;
    }
}