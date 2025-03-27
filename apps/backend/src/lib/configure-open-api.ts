import { apiReference } from "@scalar/hono-api-reference";

import type { AppOpenAPI } from "./types";

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: "0.0.1",
      title: "Todo API",
    },
  });

  app.get(
    "/documentation",
    apiReference({
      pageTitle: "Hono API Documentation",
      theme: "mars",
      _integration: "hono",
      defaultHttpClient: {
        targetKey: "js",
        clientKey: "axios",
      },
      url: "/doc",
    }),
  );
}
