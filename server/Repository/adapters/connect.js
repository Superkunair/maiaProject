const {MongoClient} = require('mongodb');
require('dotenv').config();


function setDatabaseURI(user,password){
    const databaseURI = `mongodb+srv://${user}:${password}@cluster0-mgdbb.mongodb.net/test?retryWrites=true&w=majority`
    return databaseURI;
}
function getConnection(){
    const url = setDatabaseURI(process.env.MONGOUSER,process.env.MONGOPASSWORD);
    console.log('get new URI'+ url);
    return new MongoClient(url);
}

//move the listDatabase to another case, this is only the connection
async function listDatabases(client){
    databaseList = await client.db().admin().listDatabases();
    console.log("This are you're databases:");
    databaseList.databases.forEach(db => console.log(`-${db.name}`));
}


module.exports.establishDBConnection = async function establishDBConnection(){
    const client = getConnection();
    try{
        await client.connect();
        await listDatabases(client)
        console.log('Connection Established');
    }catch(e){
        console.error(e);
    } finally{
        await client.close();
        console.log('Connection Terminated');
    }
}