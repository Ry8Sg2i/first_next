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
}
  