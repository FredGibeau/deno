import { MongoClient } from "https://deno.land/x/mongo@v0.22.0/mod.ts";

const mongoClient = new MongoClient();

mongoClient.connect(
  "mongodb+srv://root:password@cluster0.6lbak.mongodb.net/deno-oak?retryWrites=true&w=majority",
);

const mongoDb = mongoClient.database("denoOakApi");

export default mongoDb;
