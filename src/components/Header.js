import React, { useEffect, useState } from "react";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  return (
    <div className="header">
      <div className="header-title">
        <LocalPizzaIcon />
        <h1>Pizza Express</h1>
      </div>
      <div className="header-context">
        <div className="clock">
          <span>{hours < 10 ? "0" + hours : hours}</span>:
          <span>{minutes < 10 ? "0" + minutes : minutes}</span>:
          <span>{seconds < 10 ? "0" + seconds : seconds}</span>
        </div>
        <p> We are currently open until 5 PM.</p>
      </div>
    </div>
  );
};

export default Header;
