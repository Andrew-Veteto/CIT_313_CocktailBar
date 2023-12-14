const MongoClient = require('mongodb').MongoClient

class MongoConnection {
    constructor(){
        const uri = process.env.MONGO_CONNECTION_STRING;
        this.client = new MongoClient(uri, { useUnifiedTopology: true});
    }
    async init() {
        console.log("test");
        await this.client.connect();
        console.log("Connection to mongo was made");

        const dbname = 'CocktailBar';
        this.db = this.client.db(dbname);
    }
}

module.exports = new MongoConnection();