import { RouterContext } from "https://deno.land/x/oak@v7.4.0/mod.ts";
import CreateIngredientDto from "../dtos/ingredients/CreateIngredientDto.ts";
import {
  createIngredients,
  getIngredients,
} from "../services/ingredientService.ts";

export const getIngredientsApi = async (
  ctx: RouterContext,
) => {
  const books = await getIngredients();
  ctx.response.body = books;
  return ctx.response;
};

export const createIngredientApi = async (
  ctx: RouterContext,
) => {
  const { name } = await ctx.request.body().value;

  const ingredient: CreateIngredientDto = {
    name,
  };

  var newIngredientDto = await createIngredients(ingredient);
  ctx.response.status = 201;
  ctx.response.body = newIngredientDto;

  return ctx.response;
};
