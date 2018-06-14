import ValidateListParticipants from "./validateListParticipants";
import SortTeam from "./sortTeam";

export default class OrganizateGame
{
    constructor (private validateListParticipants:ValidateListParticipants, private sortTeam:SortTeam){ }

    async execute(participants:Array<string>,teams:Array<any>,minAge:number=0,maxAge:number=100){
        let listParticipants:any = await this.validateListParticipants.execute(participants,minAge,maxAge);

        if(listParticipants.validParticipants.length==participants.length){
            return {
                participants:this.sortTeam.execute(listParticipants.validParticipants,teams),
                teams,
                status:true
            }
        }else{
            return {
                participants:listParticipants.notValidParticipants,
                teams,
                status:false
            }
        }        
    }
}