import { createRoute } from "@hono/zod-openapi";
import { TasksSchema } from "@repo/schemas";
import * as HTTPStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";

const tags = ["default"];

export const HTasks = createRoute({
  tags,
  path: "/tasks",
  method: "get",
  responses: {
    [HTTPStatusCodes.OK]: jsonContent(TasksSchema, "Get all Tasks by API request"),
  },
});

export type HTasksRoute = typeof HTasks;
