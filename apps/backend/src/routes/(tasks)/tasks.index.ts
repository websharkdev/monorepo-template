import { createRouter } from '@/lib/create-app';

import * as handlers from './tasks.handlers';
import * as routes from './tasks.routes';

const TRouter = createRouter().openapi(routes.HTasks, handlers.HTasks);

export default TRouter;
