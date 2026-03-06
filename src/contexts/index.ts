import { createContext } from "react";
import { ButtonPageContextType } from "./button-page-context";

export const ButtonPageContext = createContext<ButtonPageContextType | null>(null);
