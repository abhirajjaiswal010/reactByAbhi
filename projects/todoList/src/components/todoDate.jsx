import { useState } from "react";

export const TodoDate = () => {
  //& apply date and time
  const [dateTime, setDateTime] = useState();

  setInterval(() => {
    const now = new Date();
    const formatDate = now.toDateString();
    const formateTime = now.toLocaleTimeString();
    setDateTime(`${formatDate} - ${formateTime}`);
  }, 1000);
  return <h2 className="dateTime">{dateTime}</h2>;
};
