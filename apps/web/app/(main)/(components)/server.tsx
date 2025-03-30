'use server';

import DCard from '@/components/ui/card';
import { database } from '@repo/database';
import { ITodo } from '@repo/types';

export default async function BServer() {
	const all = (await database.query.tasks.findMany()) as ITodo[];

	return (
		<div className="grid grid-cols-1 gap-10">
			<h6>Server request example:</h6>
			<div className="grid grid-cols-4 gap-5 p-5 container mx-auto">
				{all.length > 0
					? all.map((todo) => (
							<DCard key={todo.id} title={todo.name} description="Hey" content={todo.id} footer={'Footer'} />
						))
					: 'No todos founded'}
			</div>
		</div>
	);
}
