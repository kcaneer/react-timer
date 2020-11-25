import React, { useEffect, useState } from "react";

function Bootcamp() {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2020-12-11`) - +new Date();
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
    <div className="mx-auto text-center bg bg-warning mt-5">
      <h1 className="text-white">Bootcamp Graduation Countdown </h1>
      <div className="bg bg-white text-warning border border-warning rounded">
        {timerComponents.length ? timerComponents : <div>You Graduated!</div>}
      </div>
    </div>
  );
}

export default Bootcamp;
