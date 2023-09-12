'use client';

import { useTransition } from 'react';
import { doneTodo } from '../api';

const DoneTodo = ({
  id,
  isCompleted,
}: {
  id: number,
  isCompleted: boolean,
}) => {
  let [isPending, startTransition] = useTransition();

  return (
    <input
      onChange={() => startTransition(() => doneTodo(id, isCompleted))}
      checked={isCompleted}
      type="checkbox"
    />
  );
};

export default DoneTodo;