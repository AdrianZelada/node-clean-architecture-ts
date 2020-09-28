import ListUser from "../../useCases/userInteractor/listUser";
import User from "../../repositories/schemas/user";
import { Singleton } from "../../core/util/singleton";
import CreateUser from "../../useCases/userInteractor/createUser";
import CanParticipate from "../../useCases/userInteractor/canParticipe";
import ValidateListParticipants from "../../useCases/userInteractor/validateListParticipants";
import SortTeam from "../../useCases/userInteractor/sortTeam";
import OrganizeGame from "../../useCases/userInteractor/organizateGame";

export class UserController extends Singleton{

    constructor() {
        super();
    }

    async listUsers(){
        let list = new ListUser(User);
        let data = await list.execute();
        console.info('lista usera')
        return data;
    }

    async createdUser(data:any){
        let created = new CreateUser(User);
        return await created.execute(data);
    }

    async organizeGame(participants:Array<string>,teams:Array<any>,minAge:number=0,maxAge:number=100){
        let sortTeam = new SortTeam();
        let canParticipate = new CanParticipate(User);
        let validateParticipants = new ValidateListParticipants(canParticipate);
        let organizeGame = new OrganizeGame(validateParticipants,sortTeam);

        let results = await organizeGame.execute(participants,teams,minAge,maxAge)

        return results;
    }

}