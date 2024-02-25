var mongo = require("mongodb");

const getConnection = async () => {
  var mongoClient = mongo.MongoClient;
  var server = await mongoClient.connect(
    "mongodb+srv://u1:p1@cluster0.tyxukwy.mongodb.net/"
  );
  var db = server.db("users");
  return db;
};

module.exports = getConnection;
