type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type AddTodoAction = {
  type: "ADD_TODO";
  id: number;
  text: string;
};

type ToggleTodoAction = {
  type: "TOGGLE_TODO";
  id: number;
};

type Action = AddTodoAction | ToggleTodoAction;

const todosReducer = (state: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todosReducer;
