import type { AppRouteHandlrer } from "@/lib/types";

import type { HDefaultRoute } from "./default.routes";

export const HDefault: AppRouteHandlrer<HDefaultRoute> = async (c) => {
  return c.json({
    message: "Hello world!",
  });
};
