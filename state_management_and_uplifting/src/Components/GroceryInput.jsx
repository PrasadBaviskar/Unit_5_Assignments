import { useState } from "react";

export const GroceryInput = ({func}) => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleGrocery = () => {
    func(text);
  };

  return (
    <>
      <input type="text" placeholder=" Enter Grocery " onChange={handleText} />
      <button className="addbtn" onClick={handleGrocery}> Add Grocery </button>
    </>
  );
};
