import { MongoClient } from "https://deno.land/x/mongo@v0.22.0/mod.ts";

const mongoClient = new MongoClient();

await mongoClient.connect(
  "mongodb://root:password@mongo",
);

const mongoDb = mongoClient.database("QuesadillaManger");

export default mongoDb;
