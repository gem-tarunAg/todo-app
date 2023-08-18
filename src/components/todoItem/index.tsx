import { TodoItemProps } from '../../protocols/todos';

export const TodoItem = ({ id, completed, title, changeTodos, deleteTodos }: TodoItemProps) => {
  return (
    <li className="m-5">
      <label className="text-2xl">
        <input
          className="mr-4 w-4 h-4 text-blue-100 bg-gray-700 border-gray-100 rounded"
          type="checkbox"
          checked={completed}
          onChange={(e) => changeTodos(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodos(id)}
        className="ml-10 px-2 mb-1 bg-gray-800 text-lg text-red-600 rounded-lg border-2 border-red-600"
      >
        Delete
      </button>
    </li>
  );
};
