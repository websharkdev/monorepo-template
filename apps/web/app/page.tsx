'use server';

import { database } from '@repo/database';
import DCard from '../components/custom/card';

export default async function Home() {
  const all = await database.query.tasks.findMany();

  return <div className='grid grid-cols-4 gap-5 p-5 container mx-auto'>
    {all.map((todo) => <DCard
      key={todo.id}
      title={todo.name}
      description='Hey'
      content={todo.id}
      footer={'Footer'}
    />)}
  </div>;
}
