import { createContext, useContext } from "react";
interface GlobalContextinputs {
  soket: null;
  onAdd: any;
}
export const GlobalContex = createContext<GlobalContextinputs | undefined>(
  undefined
);

export function useGlobal ()  {
  const context = useContext(GlobalContex);
  if (!context) throw new Error("context within provider");
  return context;
};
