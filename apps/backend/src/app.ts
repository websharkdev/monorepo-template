import { serve } from "@hono/node-server";

import { configureOpenAPI, createApp } from "./lib";
import { DRouter } from "./routes";

const app = createApp();

const routes = [DRouter];

configureOpenAPI(app);

routes.forEach((route) => {
  app.route("/", route);
});

export default serve({
  fetch: app.fetch,
  // eslint-disable-next-line node/no-process-env
  port: Number.parseInt(process.env.PORTNUMBER || "3002"),
});
