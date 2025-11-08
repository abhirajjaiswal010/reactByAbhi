import { useContext } from "react";
import { ThemeContext } from "./Toggle";
import "../components/home.css"
export const Home = () => {

  const {theme,handleToggle}=useContext(ThemeContext)
  return (
    <div className="main-container" >
      <h1 >Dark Light Website</h1>
      <p>hi, i am abhiraj ✌🏻</p>
      <button onClick={handleToggle}>Switch To {theme==="light"? "Dark":"Light"}</button>
    </div>
  );
};
