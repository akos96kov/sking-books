import Koa from "koa";
import Router from "@koa/router";

const app = new Koa();
const router = new Router();

router.get("/search", (ctx) => {
  ctx.body = "Hello, Koa with TypeScript!";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
