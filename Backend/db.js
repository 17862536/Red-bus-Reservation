const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);

// function connects to mongodb server and  returns database
async function main() {
  await client.connect();
  return client.db(process.env.DB_NAME);
}

module.exports = { main };
