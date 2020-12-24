const { dbCollection } = require("./database");
const { ObjectID } = require("mongodb");

async function createObject(req, collection) {
  return await dbCollection(collection).insertOne(req.body);
}

async function getObjects(collection) {
  return await dbCollection(collection).find({}).toArray();
}

async function getUserById(id) {
  const objectId = new ObjectID.createFromHexString(id);
  return await dbCollection("users").findOne({ _id: objectId });
}

async function updateUserById(req, id) {
  const objectId = new ObjectID.createFromHexString(id);
  return await dbCollection("users").replaceOne({ _id: objectId }, { ...req });
}

async function getItemsByCategory(id) {
  return await dbCollection("items")
    .find({ categoryId: `${id}` })
    .toArray();
}

async function getItemById(id) {
  const objectId = new ObjectID.createFromHexString(id);
  return await dbCollection("items").find({ _id: objectId }).toArray();
}

exports.createObject = createObject;
exports.getObjects = getObjects;
exports.getUserById = getUserById;
exports.updateUserById = updateUserById;
exports.getItemsByCategory = getItemsByCategory;
exports.getItemById = getItemById;
