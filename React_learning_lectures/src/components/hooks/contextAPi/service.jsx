import { useContext } from "react";
import { BioContext } from ".";

export const Service = () => {
  const { work } = useContext(BioContext);

  return (
    <div>
      <h1>my services : {work.join(", ")}</h1>
      
    </div>
  );
};
