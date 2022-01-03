import { useState } from "react";

export const Receipes = () => {
  const [list, setList] = useState([]);

  fetch(`http://localhost:8000/data`)
    .then((res) => res.json())
    .then((data) => setList(data));

  return (
    <div className="all_recs">
      <h3> Receipes </h3>
      {list.map((itm) => {
        return (
          <div className="rec_div">
            <p> Receipe  {itm.title} </p>
            <p> Time To Cook {itm.timetocook} </p>
          </div>
        );
      })}
    </div>
  );
};
