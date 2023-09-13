'use server';

import prisma from '../prisma/prisma';
import { revalidatePath } from 'next/cache';

export async function doneTodo(id: number, isCompleted: boolean) {
  await prisma.todo.update({
    where: {
      id: Number(id),
    },
    data: {
      isCompleted: !isCompleted,
    },
  });
  revalidatePath('/posts');
};

export async function addTodo(data:FormData) {
  'use server';
    const name = data.get('name') as string;
    await prisma.todo.create({data: {name}});
    revalidatePath("/")
  };

export async function deleteTodo(data:FormData) {
  'use server';
    const id = data.get('id') as string;
    await prisma.todo.delete({
      where: {
        id: Number(id),
      },
    });
    revalidatePath('/')
  };