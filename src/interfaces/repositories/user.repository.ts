
export interface UserRepository{

    list():Promise<any>,
    
    add(user:any):Promise<any>,

    edit(user:any):Promise<any>,

    delete(user:any):Promise<any>,

    getById(id:string):Promise<any>,

}