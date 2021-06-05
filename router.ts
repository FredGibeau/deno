import { Router } from "https://deno.land/x/oak@v7.4.0/mod.ts";
import {
  createIngredientApi,
  getIngredientsApi,
} from "./controllers/ingredientController.ts";

const router = new Router();
router.get("/ingredients", getIngredientsApi);
router.post("/ingredients", createIngredientApi);

export default router;
