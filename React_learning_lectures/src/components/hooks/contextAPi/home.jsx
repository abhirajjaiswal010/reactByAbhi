import { useContext } from "react";
import { BioContext } from ".";

export const Home = () => {
  const { Myname, age } = useContext(BioContext);

  return (
    <div>
      <h1>
        Home : I'm {Myname} & I'm {age} yrs old
      </h1>
    </div>
  );
};
