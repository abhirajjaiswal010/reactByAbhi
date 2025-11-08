import { use, useState } from "react";
import "../css/ChallengeUseState.css";

export const UseState_challenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    if (count < 100) {
      setCount(count + step);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - step);
    }
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <h1>Challenge OF Use State</h1>

      <h3>Count - {count} </h3>

      <label htmlFor="step">Steps</label>
      <input
        id="step"
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />

      <div className="button-row">
        <button className="inc_btn" onClick={handleIncrement}>
          Increment
        </button>
        <button className="dec_btn" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="reset_btn" onClick={handleReset}>
          {" "}
          Reset
        </button>
      </div>
    </div>
  );
};
