

const dotenv = require('dotenv');
dotenv.config();


//código de ejemplo de la documentación de mongodb

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const Mongo_Url_Local = process.env.Mongo_Url_Local;
const client = new MongoClient(Mongo_Url_Atlas);

// Database Name
const dbName = 'myProject';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');

    // the following code examples can be pasted here...

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());


