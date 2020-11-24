import React, { useEffect, useState } from "react";

function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear() + 1;
    const difference = +new Date(`${year}-01-01`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear() + 1);

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div className="mx-auto text-center bg bg-secondary">
      <h1 className="text-white">{year} Countdown </h1>
      <div className="bg bg-white text-secondary border border-secondary rounded">
        {timerComponents.length ? timerComponents : <div>Happy New Year!</div>}
      </div>
    </div>
  );
}

export default App;
