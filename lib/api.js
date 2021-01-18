const { dbCollection } = require("./database");
const { ObjectID } = require("mongodb");
const bcrypt = require("bcrypt");

async function createObject(req, collection) {
  try {
    return await dbCollection(collection).insertOne(req.body);
  } catch (err) {
    console.error(err);
  }
}

async function getObjects(collection) {
  try {
    return await dbCollection(collection).find({}).toArray();
  } catch (err) {
    console.error(err);
  }
}

async function getUserById(id) {
  try {
    const objectId = new ObjectID.createFromHexString(id);
    return await dbCollection("users").findOne({ _id: objectId });
  } catch (err) {
    console.error(err);
  }
}

async function updateUserById(req, id) {
  try {
    const objectId = new ObjectID.createFromHexString(id);
    return await dbCollection("users").replaceOne(
      { _id: objectId },
      { ...req }
    );
  } catch (err) {
    console.error(err);
  }
}

async function getItemsByCategory(id) {
  try {
    return await dbCollection("items")
      .find({ categoryId: `${id}` })
      .toArray();
  } catch (err) {
    console.error(err);
  }
}

async function getItemById(id) {
  try {
    const objectId = new ObjectID.createFromHexString(id);
    return await dbCollection("items").find({ _id: objectId }).toArray();
  } catch (err) {
    console.error(err);
  }
}

async function authenticateUser(collection, username, password) {
  try {
    const hash = await bcrypt.hash(password, 10);
    const { token } = await dbCollection(collection).findOne({
      name: username,
    });
    if ((await bcrypt.compare(password, hash)) === true) {
      return token;
    }
  } catch (err) {
    console.error(err);
  }
}

exports.authenticateUser = authenticateUser;
exports.createObject = createObject;
exports.getObjects = getObjects;
exports.getUserById = getUserById;
exports.updateUserById = updateUserById;
exports.getItemsByCategory = getItemsByCategory;
exports.getItemById = getItemById;
