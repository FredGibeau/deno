import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./router.ts";

const app = new Application();
const hostname = "localhost";
const port = 8080;

// Here, we are telling our application to use the router
app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ hostname, port });

console.log(`Server is running on http://${hostname}:${port}`);
