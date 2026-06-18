import React, { useEffect, useState } from "react";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="outer container text-center mt-5 ">
      <div className="dot"></div>
      <div className="card">
        <div className="ray"></div>
        <div className="text fs-1">
          <h1 className="fs-1">Digital Clock</h1>
          <h2>{time.toLocaleTimeString()}</h2>
        </div>
        <div className="line topl"></div>
        <div className="line leftl"></div>
        <div className="line bottoml"></div>
        <div className="line rightl"></div>
      </div>
    </div>
  );
};

export default Clock;
