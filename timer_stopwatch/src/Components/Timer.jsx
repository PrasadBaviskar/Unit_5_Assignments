import { useEffect, useRef, useState } from "react";

export const Timer = () => {
  const [milseconds, setMilSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timeRef = useRef();

//   useEffect(() => {
//     startTimer();
//     return stopTimer;
//   }, []);

  const startTimer = () => {
    if (isRunning) {
      return;
    }
    timeRef.current = setInterval(() => {
      setMilSeconds((prev) => {
        if (prev === 100) {
          setSeconds((p) => p + 1);
          return 0;
        } else {
          return prev + 1;
        }
      }, 10);
      setIsRunning(true);
    });
  };

  const stopTimer = () => {
    clearInterval(timeRef.current);
    setIsRunning(false);
  };

  return (
    <>
      <h1> Timer </h1>
      <h1>
        {" "}
        {seconds}
        <small>s </small> {milseconds}{" "}
      </h1>
      <button onClick={startTimer}> Start </button>
      <button onClick={stopTimer}> Stop </button>
    </>
  );
};
