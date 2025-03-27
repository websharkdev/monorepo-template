import { createRouter } from "@/lib/create-app";
import * as handlers from "./default.handlers";
import * as routes from "./default.routes";

const DRouter = createRouter().openapi(routes.HDefault, handlers.HDefault);

export default DRouter;
