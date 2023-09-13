import { revalidatePath } from 'next/cache';
import prisma from '../../prisma/prisma';
import DoneTodo from './components/todos/DoneTodo';
import AddTodo from '../app/components/todos/AddTodo';
import { deleteTodo, doneTodo } from '../api';

const Page = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <div className="m-8">
      <h1 className="text-xl font-bold">Todo一覧</h1>
      <ul className="mt-8">
        {todos.map((todo) => (
          <li 
            key={todo.id}
            className={`flex items-center spase-x-2 ${
              todo.isCompleted ? 'line-through' : ''
            }`}
          >
            <span>{todo.name}</span>
            <DoneTodo id={todo.id} isCompleted={todo.isCompleted} />
            <form>
              <input type="hidden" name="id" value={todo.id} />
              <button
                className="bg-red-500 px-2 py-1 rounded-lg text-sm text-white"
                formAction={deleteTodo}
              >
                削除
              </button>
            </form>
          </li>
        ))}
      </ul>
      <AddTodo />
    </div>
  );
};

export default Page;
