import { UserEntity } from "../../core/entities/user";

export default class SortTeam
{
    constructor (){ }

    execute(participants:Array<UserEntity>,teams:Array<any>){
        let porcentItem = Math.round(100/participants.length);
        let porcentForTeam = porcentItem*(Math.round(participants.length/teams.length));
        let porcentedTeam = teams.map((team,index)=>{
            return{
                porcent:porcentForTeam
            }
        });
        let participantsTeam=participants.map((participant:UserEntity)=>{
            let subject = participant.sortTeam(teams);
            let indexTeam = teams.indexOf(subject.team);
            if(indexTeam != -1){
                porcentedTeam[indexTeam].porcent=porcentedTeam[indexTeam].porcent-porcentItem;
                if(porcentedTeam[indexTeam].porcent <= 0){
                    teams=teams.filter((t:string)=>{
                        return t != subject.team
                    })
                }
            }
            return subject;
        });
        return participantsTeam
    }
}