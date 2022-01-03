import { useEffect, useState } from "react";

export const Timer = ({ start, end }) => {
  const [second, setSecond] = useState(start);

  useEffect(() => {
    const id = setInterval(() => {
      setSecond((p) => {
        if (p === end) {
          clearInterval(id);
          return 0;
        } else {
          return p + 1;
        }
      });
    }, 1000);

    return () => {
      console.log("Unmount");
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h1> Timer {second}</h1>
    </>
  );
};
