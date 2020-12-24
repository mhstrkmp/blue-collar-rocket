const { MongoClient } = require("mongodb");

let client;
let db;

async function dbConnect(url, dbName) {
  try {
    client = await MongoClient.connect(url, { useUnifiedTopology: true });
    db = client.db(dbName);
  } catch (error) {
    console.error(error);
  }
}

async function dbClose() {
  try {
    return await client.close();
  } catch (error) {
    console.error(error);
  }
}

function dbCollection(name) {
  try {
    return db.collection(name);
  } catch (error) {
    console.error(error);
  }
}

exports.dbConnect = dbConnect;
exports.dbClose = dbClose;
exports.dbCollection = dbCollection;
