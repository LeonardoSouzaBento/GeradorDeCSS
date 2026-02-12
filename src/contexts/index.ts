import { createContext } from "react";
import { ButtonPageContextType } from "./button-page-context"; // button-page
// pallet-generator

export const ButtonPageContext = createContext<ButtonPageContextType | null>(null);
