import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";

export function ThemeProvider ({ children }){

    const [theme, setTheme] = useState(()=>{
        const saved = localStorage.getItem("theme");
        if (saved) return saved;
        return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    });

    const [noNav, setNoNav] = useState(false);
    useEffect(() => {
        document.documentElement.classList.toggle("dark",theme === "dark");
        localStorage.setItem("theme",theme);
    },[theme]);
    const toggleTheme = ()=>{
        setTheme((t)=> t === "light" ? "dark": "light");
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme,noNav,setNoNav}}>
            {children}
        </ThemeContext.Provider>
    )
}