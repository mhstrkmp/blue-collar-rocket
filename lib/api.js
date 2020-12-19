const { dbCollection } = require("./database");

async function createObject(req, collection) {
  return await dbCollection(collection).insertOne(req.body);
}

async function getObjects(collection) {
  return await dbCollection(collection).find({}).toArray();
}

async function getUserById(id) {
  return await dbCollection("users").findOne({ userId: `${id}` });
}

async function updateUserById(req, id) {
  return await dbCollection("users").replaceOne(
    { userId: `${id}` },
    { ...req }
  );
}

async function getItemsByCategory(id) {
  return await dbCollection("items")
    .find({ categoryId: `${id}` })
    .toArray();
}

async function getItemById(id) {
  return await dbCollection("items")
    .find({ itemId: `${id}` })
    .toArray();
}

exports.createObject = createObject;
exports.getObjects = getObjects;
exports.getUserById = getUserById;
exports.updateUserById = updateUserById;
exports.getItemsByCategory = getItemsByCategory;
exports.getItemById = getItemById;
