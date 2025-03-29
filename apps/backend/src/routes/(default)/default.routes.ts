import { createRoute } from '@hono/zod-openapi';
import * as HTTPStatusCodes from 'stoker/http-status-codes';
import { jsonContent } from 'stoker/openapi/helpers';
import { createMessageObjectSchema } from 'stoker/openapi/schemas';

const tags = ['default'];

export const HDefault = createRoute({
	tags,
	path: '/',
	method: 'get',
	responses: {
		[HTTPStatusCodes.OK]: jsonContent(createMessageObjectSchema('Default Message API'), 'Default (Test) API request'),
	},
});

export type HDefaultRoute = typeof HDefault;
