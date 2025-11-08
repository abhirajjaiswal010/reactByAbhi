import { useState } from "react";


import "./toggleSwitch.css";
export const Toggle_switch = () => {
  const [isOn, setIsOn] = useState(false);
  const checkIsOn = isOn ? "on" : "off";
  const bgToggle = { backgroundColor: isOn ? "#BBD8A3" : "" };

  const handleToggleSwitch = () => {
   setIsOn(!isOn)
  };
  return (
    <div className="toggle_switch" onClick={handleToggleSwitch}>
      <div className={`switch ${checkIsOn}`} style={bgToggle}>
        <span className="switch_state">{checkIsOn}</span>
      </div>
    </div>
  );
};
