import { Schema } from "mongoose";

// export class UserExtend extends Schema{
export class UserExtend{

    static instance:any;

    constructor(data:any,opt:any){
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