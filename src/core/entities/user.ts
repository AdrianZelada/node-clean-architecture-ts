
import { User } from '../../interfaces/entities/user'
export class UserEntity implements User{

    name:string;
    lastName:string;
    email:string;
    birthday:Date;
    team:string;

    constructor(data:any){        

        let user:any=Object.assign({
            name:'',
            lastName:'',
            email:'',
            birthday:null,
            team:''
        },data);

        Object.assign(this,user)
    }

    isCorrectAge(minAge:number,maxAge:number){
        if(this.birthday){
            let date:Date = new Date();
            let years:number =date.getFullYear() -this.birthday.getFullYear();                        
            return ((minAge <= years) &&( years <= maxAge))
        }
        return false;        
    }    

    sortTeam(teams:Array<any>=[]){
        this.team = teams[this.sortNumber(teams.length)];
        return this.getUser();
    }

    getUser(){
        return {
            name:this.name,
            lastName:this.lastName,
            email:this.email,
            birthday:this.birthday,
            team:this.team
        }
    }

    private sortNumber(length:number){
        return Math.floor(Math.random() * Math.floor(length));
    }

}