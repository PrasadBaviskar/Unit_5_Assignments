import { useEffect, useState } from "react";

export const Timer = ({ start, end }) => {
  const [second, setSecond] = useState(start);
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setSecond((p) => {
        if (p === end) {
          clearInterval(id);
          setBtn(true);
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
