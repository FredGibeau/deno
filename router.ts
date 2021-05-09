import { Router } from "https://deno.land/x/oak@v7.4.0/mod.ts";
import { getBooks } from "./controllers/bookController.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello from Deno";
});

router.get("/books", getBooks);

export default router;
