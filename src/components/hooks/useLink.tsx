import { createContext, ReactNode, useContext, useState } from "react";

interface LinkContextProviderProps {
  children: ReactNode;
}

interface LinkContextProps {
  isActive: string;
  handleIsActive: (value: string) => void;
}

export const LinkContext = createContext({} as LinkContextProps);

export function LinkContextProvider({ children }: LinkContextProviderProps) {
  const [isActive, setIsActive] = useState("#");

  function handleIsActive(value: string) {
    setIsActive(value);
  }

  return (
    <LinkContext.Provider value={{ isActive, handleIsActive }}>{children}</LinkContext.Provider>
  );
}

export function useLink() {
  const context = useContext(LinkContext);
  return context;
}
