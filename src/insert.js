const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';

let dbConnect = require("./mongodb");
let insert = async () => {
  let db = await dbConnect();
  let result = await db.insert([
    {
      name: "sourabh",
      age: 24,
    },
    {
      name: "ram",
      age: 25,
    },
  ]);
  console.log("successfuly added");
};
insert();
