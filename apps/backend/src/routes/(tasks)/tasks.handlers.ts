import type { ITodo } from '@repo/types';

import { database } from '@repo/database';

import type { AppRouteHandlrer } from '@/lib/types';

import type { HTasksRoute } from './tasks.routes';

export const HTasks: AppRouteHandlrer<HTasksRoute> = async (c) => {
	const tasks = (await database.query.tasks.findMany()) as ITodo[];

	return c.json(tasks);
};
