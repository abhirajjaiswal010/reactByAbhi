import { useState } from "react";
import useSound from 'use-sound';
import mouseClick from '../assets/mouseClick.mp3'

import "./toggleSwitch.css";
export const Toggle_switch = () => {
  const [isOn, setIsOn] = useState(false);
  const checkIsOn = isOn ? "on" : "off";
  const bgToggle = { backgroundColor: isOn ? "#BBD8A3" : "" };
  const [play] = useSound(mouseClick,{
    volume:0.5,
    interrupt:true,
    preload:true,
  })
  const handleToggleSwitch = () => {
    play();
    setTimeout(() => setIsOn(!isOn), 300);
  };
  return (
    <div className="toggle_switch" onClick={handleToggleSwitch}>
      <div className={`switch ${checkIsOn}`} style={bgToggle}>
        <span className="switch_state">{checkIsOn}</span>
      </div>
    </div>
  );
};
