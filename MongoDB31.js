// read data from mongodb

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "erp-management-system";
const client = new MongoClient(url);

async function dbconnect() {
  let result = await client.connect();
   db = result.db(database);
  return db.collection("admin");
 // let response = await collection.find({}).toArray();
 // console.log(response);
}

module.exports=dbconnect;