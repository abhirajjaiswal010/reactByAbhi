import { useContext } from "react";
import { BioContext } from ".";

export const About = () => {
  const { address } = useContext(BioContext);

  return (
    <div>
      <h1>About : i am from {address}</h1>
      
    </div>
  );
};
