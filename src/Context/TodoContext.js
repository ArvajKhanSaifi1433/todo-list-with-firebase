import { createContext, useContext } from "react";

export const createTodoContext = createContext({
  addTodo: () => {},
  deleteTodo: () => {},
});

export const TodoContextProvider = createTodoContext.Provider;

export const useTodoContext = () => useContext(createTodoContext);
