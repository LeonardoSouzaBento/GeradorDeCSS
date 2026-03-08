import { createContext, useContext } from "react";
import { ButtonPageContextType } from "./button-page-context";

export const ButtonPageContext = createContext<ButtonPageContextType | null>(null);
export const useButtonPageContext = () => {
  return useContext(ButtonPageContext);
};
