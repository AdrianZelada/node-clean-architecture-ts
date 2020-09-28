import { default as config} from  "../config/config";
import { connect} from "mongoose";

export namespace DataBase{
    export let connection:any;

    export async function connectDB(){
        DataBase.connection = await connect(config.db.host + config.db.database);
        return connection;
    }

    export async function disconnect(){
        return await connection.end();;
    }

}