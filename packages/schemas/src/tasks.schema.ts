import { z } from 'zod';

export const TaskItemSchema = z.object({
	id: z.number(),
	name: z.string(),
	done: z.boolean(),
	createdAt: z.string().or(z.null()),
	updatedAt: z.string().or(z.null()),
});

export const TasksSchema = z.array(TaskItemSchema);
