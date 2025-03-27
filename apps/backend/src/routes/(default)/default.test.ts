import { createApp } from "@/lib";
import { testClient } from "hono/testing";
import { describe, expect, expectTypeOf, it } from "vitest";
import DRouter from "./default.index";

describe("Default API Test", () => {
  it("respons with object", async () => {
    const client = testClient(createApp().route("/", DRouter));
    const response = await client.index.$get();
    const json = await response.json();

    expectTypeOf(json).toBeObject();
  });

  it('respons with object message "Hello world!"', async () => {
    const client = testClient(createApp().route("/", DRouter));
    const response = await client.index.$get();
    const json = await response.json();

    expect(json.message).string("Hello world!");
  });
});
