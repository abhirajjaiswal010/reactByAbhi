//? i am using contextAPI then provider why to make this index.jsx as global file distributer to his child component

import {  createContext } from "react";

//? 1 step
//declare the contextAPI
export const BioContext = createContext()

//? 2 step
//declare the provider

export const BioProvider = ({children}) => {
  const Myname = "abhiraj";
  const age = 20
  const address ="indore"
    const work = ["React", "JavaScript", "CSS"];

  console.log(children);
  
  return <BioContext.Provider value={{Myname:Myname,age:age,address:address,work}}>{children}</BioContext.Provider>;
};
