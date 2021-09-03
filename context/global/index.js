import { React, createContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = [state, dispatch];

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
