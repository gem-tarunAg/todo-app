import { useEffect, useState } from 'react';
import { TodoList } from './components/todoList';
import { NewItem } from './components/newItem';
import { Todo } from './protocols/todos';

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const local = localStorage.getItem('TODOS');
    return local !== null ? JSON.parse(local) : [];
  });

  useEffect(() => {
    localStorage.setItem('TODOS', JSON.stringify(todos));
  }, [todos]);

  const addItem = (item: string) => {
    setTodos((curr) => {
      return [...curr, { id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1, title: item, completed: false }];
    });
  };

  const changeTodos = (id: number, completed: boolean) => {
    setTodos((curr) => {
      return curr.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodos = (id: number) => {
    setTodos((curr) => {
      return curr.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <NewItem addItem={addItem} />
      <TodoList changeTodos={changeTodos} deleteTodos={deleteTodos} todos={todos} />
    </>
  );
}

export default App;
