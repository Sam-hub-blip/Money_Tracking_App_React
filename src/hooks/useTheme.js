import { useContext } from "react";
import { ThemeContext } from "../context/themeContext/themeContext";

export function useTheme(){
    const ctx = useContext(ThemeContext);
    if(!ctx) console.log("usetheme doit etre dans un ThemeProvider");
    return ctx;
}