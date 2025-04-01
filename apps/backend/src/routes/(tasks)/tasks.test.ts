import { testClient } from "hono/testing";
import { describe, expectTypeOf, it } from "vitest";

import { createApp } from "@/lib";

import TRouter from "./tasks.index";

describe("get all Tasks API - test", () => {
  it("respons with array", async () => {
    const client = testClient(createApp().route("/tasks  ", TRouter));
    const response = await client["tasks  "].tasks.$get();
    const json = await response.json();

    expectTypeOf(json).toBeArray();
  });
});
