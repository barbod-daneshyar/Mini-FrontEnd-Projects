import { Reducer, createContext, useReducer } from "react";
import { Task_t, TasksList_t } from "./GenericTypes";

type TodoContext_t = {
  state: TasksList_t;
  add: (payload: Action_Add_t["payload"]) => void;
  remove: (payload: Task_t) => void;
  select: (payload: Task_t) => void;
};
type Action_t = Action_Add_t | Action_Remove_t | Action_Select_t;
export type Action_Add_t = {
  type: "add";
  payload: Omit<Task_t, "id" | "selected">;
};
type Action_Remove_t = {
  type: "remove";
  payload: Task_t;
};
type Action_Select_t = {
  type: "select";
  payload: Task_t;
};

type TodoContextProviderProps = {
  children: React.ReactNode;
};

const initialState: TasksList_t = [];
export const TodoContext = createContext({} as TodoContext_t);

const reducer: Reducer<TasksList_t, Action_t> = (state, action) => {
  switch (action.type) {
    case "add":
      const newState = [...state];
      newState.push({
        ...action.payload,
        id: Math.floor(Math.random() * 10000),
        selected: false,
      });
      return newState;
    case "remove":
      return state.filter((t) => t.id !== action.payload.id);
    case "select":
      const newState1 = [...state];
      const index = newState1.indexOf(action.payload);
      newState1[index] = {
        ...action.payload,
        selected: !action.payload.selected,
      };
      return newState1;
    default:
      return state;
  }
};

const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider
      value={{
        state,
        add: (payload) => dispatch({ type: "add", payload }),
        remove: (payload) => dispatch({ type: "remove", payload }),
        select: (payload) => dispatch({ type: "select", payload }),
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
