
import { User } from '../../interfaces/entities/user'
export class UserEntity implements User{

    name:string;
    lastName:string;
    email:string;
    birthday:Date;
    team:string;

    constructor(data:User){
        Object.assign(this,data);
    }

    isCorrectAge(minAge:number,maxAge:number){
        if(this.birthday){
            let years:number = this.birthday.getFullYear();            
            return ((minAge <= years) &&( years <= maxAge))
        }
        return false;        
    }    

    sortTeam(teams:Array<any>=[]){
        this.team = teams[this.sortNumber(teams.length)];
        return this;
    }

    private sortNumber(length:number){
        return Math.floor(Math.random() * Math.floor(length));
    }

}