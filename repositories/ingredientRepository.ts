import MongoClient from "../mongoClient.ts";
import Ingredient from "../models/ingredient.ts";

const ingredientsCollection = MongoClient.collection<Ingredient>("ingredients");

export const getIngredientsDb = async (): Promise<Ingredient[]> => {
  return await ingredientsCollection.find().toArray();
};

export const createIngredientDb = async (
  ingredient: Ingredient,
): Promise<string> => {
  const generatedId = await ingredientsCollection.insertOne(ingredient);
  const id = generatedId.toString();
  return id;
};
