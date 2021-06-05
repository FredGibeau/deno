import CreateIngredientDto from "../dtos/ingredients/CreateIngredientDto.ts";
import GetIngredientDto from "../dtos/ingredients/GetIngredientDto.ts";
import {
  createIngredientDb,
  getIngredientsDb,
} from "../repositories/ingredientRepository.ts";

export const getIngredients = async (): Promise<GetIngredientDto[]> => {
  return await getIngredientsDb();
};

export const createIngredients = async (
  ingredientDto: CreateIngredientDto,
): Promise<GetIngredientDto> => {
  const ingredient = { ...ingredientDto, _id: "" };
  const ingredientId = await createIngredientDb(ingredient);

  return { ...ingredient, _id: ingredientId };
};
