export class Singleton{

    static Instance:any=null;
    static getInstance <T extends Singleton>():T{
        if(!this.Instance){
            this.Instance = new this();
        }
        return <T> this.Instance;
    }
}