import { TodoListProps } from '../../protocols/todos';
import { TodoItem } from '../todoItem';

export const TodoList = ({ todos, changeTodos, deleteTodos }: TodoListProps) => {
  return (
    <div className="font-mono m-4 p-2 text-white">
      <h1 className="text-4xl mt-10">TO DO LIST:</h1>
      <ul className="mt-4">
        {todos.length === 0 && 'No Todos'}
        {todos.map((todo) => {
          return <TodoItem {...todo} key={todo.id} changeTodos={changeTodos} deleteTodos={deleteTodos} />;
        })}
      </ul>
    </div>
  );
};
