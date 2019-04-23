import { createServer } from "http";
import * as next from "next";

import { routes } from "./routes";

const port = parseInt(process.env.PORT!, 10) || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(port, (err: any) => {
    if (err) { throw err; }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
