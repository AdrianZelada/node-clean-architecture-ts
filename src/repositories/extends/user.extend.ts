import { Document, Schema, Model, model,SchemaDefinition} from "mongoose";

export class UserExtend extends Schema{

    static instance:any;

    constructor(data:any,opt:any){
        UserExtend.instance = super(data,opt);  
        UserExtend.instance.statics.list=UserExtend.list;
        UserExtend.instance.statics.add=UserExtend.add;
    }

    static async list(){
        let _this:any=this;        
        return await _this.find();
    }   

    static async add(user:any){
        let _this:any=this;        
        return await _this.create(user);
    }

}