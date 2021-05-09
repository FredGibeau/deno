import { Application } from "https://deno.land/x/oak@v7.4.0/mod.ts";
import router from "./router.ts";

const app = new Application();
const hostname = "localhost";
const port = 8080;

app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ hostname, port });

console.log(`Server is running on http://${hostname}:${port}`);
