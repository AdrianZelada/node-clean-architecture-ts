const HOST='http://localhost';
const PORT= 4000;


const config:any  = {
    host: HOST,
    port: PORT,
    hostname:`${HOST}:${PORT}/`,
    db: {
        host: `mongodb://${process.env.MONGO_HOST || 'localhost'}/`,        
        database: 'userGame',
        user: '',
        password: '',
        port: 27017
    },
}

export default config;
