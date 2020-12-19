const { MongoClient } = require("mongodb");

let client;
let db;

async function dbConnect(url, dbName) {
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
}

async function dbClose() {
  return await client.close();
}

function dbCollection(name) {
  return db.collection(name);
}

exports.dbConnect = dbConnect;
exports.dbClose = dbClose;
exports.dbCollection = dbCollection;
