import { createContext } from "react";
import { context } from "../types";
const Context = createContext<context>({
  ids: [],
  status: "",
  totalPrice: 0,
  totalItem: 0,
});

export default Context;
