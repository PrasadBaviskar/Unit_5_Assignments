import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { nanoid } from "nanoid";

export const Grocery = () => {
  const [list, setList] = useState([]);

  const removeItem = (id) => {
    const newList = list.filter((itm) => {
      return itm.id !== id;
    });
    setList(newList);
    console.log(newList);
  };

  const func = (data) => {
    const payload = {
      title: data,
      status: false,
      id: nanoid(4),
    };

    setList([...list, payload]);
    // console.log(list);
  };

  return (
    <>
      <GroceryInput func={func} />
      <h1 className="title"> Grocerry List </h1>
      {list.map((itm) => {
        return <GroceryList key={itm.id} {...itm} removeItem={removeItem} />;
      })}
    </>
  );
};
