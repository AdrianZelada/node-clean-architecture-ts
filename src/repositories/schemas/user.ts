import { Document, Schema, Model, model} from "mongoose";
import { User } from "../../interfaces/entities/user";
import { UserRepository } from "../../interfaces/repositories/user.repository";
import { UserExtend } from "../extends/user.extend";

export interface IUser extends Document,User,UserRepository {    
    createdAt:  any;
}

export interface IUserModel extends Model<IUser> {}

const UserSchema = new UserExtend({  
    email: {
      type:String,
      index:true
    },
    name:String,
    lastName : String,
    birthday:Date,
    createdAt:{
      type:Date,
      default:Date.now
    }  
  }, { timestamps: true});


let User:IUserModel= model<IUser,IUserModel>("User", UserSchema);
export default User;