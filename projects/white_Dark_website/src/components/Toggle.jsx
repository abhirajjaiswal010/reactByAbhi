import { createContext,  useEffect,  useState } from "react";
//? step-1
export const ThemeContext = createContext();

//? step-2
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const handleToggle = () => {
    return setTheme((e) => (e === "light" ? "dark" : "light"));
  };

   useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (
    <ThemeContext.Provider value={{ theme,handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
