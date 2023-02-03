const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://avivdm7:R7mKgth9XP6npyp@cluster0.ekr8jdm.mongodb.net/?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log("Connected!");
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if(_db) return _db;
  throw 'No DataBase Found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;



