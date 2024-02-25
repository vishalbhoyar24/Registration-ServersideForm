const getConnection = require("../common/dbConnection");
const mongo = require("mongodb");
const objectId = mongo.ObjectId;

const createUser = async (dataObj) => {
  const db = await getConnection();
  const collection = db.collection("user");
  const result = await collection.insertOne(dataObj);
  return result;
};

const updateUser = async (id, dataObj) => {
  const db = await getConnection();
  const collection = db.collection("user");
  const result = await collection.updateOne(
    { _id: new objectId(id) },
    { $set: dataObj }
  );
  return result;
};

const deleteUser = async (id) => {
  const db = await getConnection();
  const collection = db.collection("user");
  const result = await collection.deleteOne({ _id: new objectId(id) });
  return result;
};

const getUser = async () => {
  const db = await getConnection();
  const collection = db.collection("user");
  const result = await collection.find({}).toArray();
  return result;
};

module.exports = { createUser, updateUser, deleteUser, getUser };
