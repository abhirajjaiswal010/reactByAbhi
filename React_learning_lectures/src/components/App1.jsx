// import { useState } from "react";
// import { Short_circuit } from "./05_Short_circuit";
// import { UseOF_useState } from "./hooks/01_useState";
// import { UseState_challenge } from "./hooks/02_Challenge";
// import { UseEffect_challenge } from "./hooks/03_useEffect";
// import { BioContext, BioProvider } from "./hooks/contextAPi";
// import { About } from "./hooks/contextAPi/about";
// import { Home } from "./hooks/contextAPi/home";
// import { Service } from "./hooks/contextAPi/service";
 import { Reducer_Hook } from "./hooks/useReducer/useReducer";

export const App1 = () => {
  return (
    <>
      {/* <UseOF_useState /> */}
      {/* <UseEffect_challenge/> */}
      {/* <BioProvider>
        <Home />
        <About/>
        <Service/>
      </BioProvider> */}
      <Reducer_Hook/>
    </>
  );
};
