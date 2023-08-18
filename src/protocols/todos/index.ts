export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type TodoItemProps = {
  id: number;
  completed: boolean;
  title: string;
  changeTodos: (id: number, completed: boolean) => void;
  deleteTodos: (id: number) => void;
};

export type TodoListProps = {
  todos: Todo[];
  changeTodos: (id: number, completed: boolean) => void;
  deleteTodos: (id: number) => void;
};

export type NewItemProps = {
  addItem: (item: string) => void;
};
