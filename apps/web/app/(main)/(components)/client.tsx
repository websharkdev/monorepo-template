'use client';

import DCard from "@/components/ui/card";
import { database } from "@repo/database";
import { ITodo } from "@repo/types";
import { useSuspenseQuery } from "@tanstack/react-query";

const BClient = () => {
	const { data: all } = useSuspenseQuery({
        queryKey: ['turborepo-template-get-todos'],
        queryFn: async () => await database.query.tasks.findMany() as ITodo[],
        refetchOnWindowFocus: false,
    })

	return (
		<div className="grid grid-cols-1 gap-10">
			<h6>Client request example:</h6>
			<div className="grid grid-cols-4 gap-5 p-5 container mx-auto">
				{all.length > 0
					? all.map((todo) => (
							<DCard key={todo.id} title={todo.name} description="Hey" content={todo.id} footer={'Footer'} />
						))
					: 'No todos founded'}
			</div>
		</div>
	);
};

export default BClient;
