import { Schema } from "mongoose";

export class UserExtend extends Schema{

    static instance:any;

    constructor(data:any,opt:any){
        UserExtend.instance = super(data,opt);  
        UserExtend.instance.statics.list=UserExtend.list;
        UserExtend.instance.statics.add=UserExtend.add;
        UserExtend.instance.statics.getById=UserExtend.getById;
    }

    static async list(){
        let _this:any=this;        
        return await _this.find();
    }   

    static async add(user:any){
        let _this:any=this;        
        return await _this.create(user);
    }

    static async getById(id:string){
        let _this:any=this;        
        return (await _this.findById(id))._doc;
    }
}