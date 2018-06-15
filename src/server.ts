import { DataBase} from './infrastructures/db/db';
import { WebServer } from "./infrastructures/web-server/webServer";

DataBase.connectDB();
const server = new WebServer();

server.start();