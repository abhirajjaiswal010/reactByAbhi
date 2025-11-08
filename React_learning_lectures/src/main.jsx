import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import { App } from "./components/video_1to10";
// import { FirstInterview } from "./components/first_interview";
// import { Loop } from "./components/01_looping";
// import { Profile_card } from "./components/03_profileCard";
import { App1 } from "./components/App1";
import "../src/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <FirstInterview/> */}
    {/* <Loop/> */}
    {/* <Profile_card/> */}
    <App1 />
  </StrictMode>
);
