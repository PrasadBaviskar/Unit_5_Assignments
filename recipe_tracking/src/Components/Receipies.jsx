import { useState } from "react";

export const Receipes = () => {
  const [list, setList] = useState([]);
  const [details, setDetails] = useState({})

  const Alldetails = (data) =>{
    setDetails(details)
  }

  fetch(`http://localhost:8000/data`)
    .then((res) => res.json())
    .then((data) => setList(data));



  return (
    <div className="all_recs">
      <h3> Receipes </h3>
      {list.map((itm) => {
        return (
          <div className="rec_div" key={itm.id} onClick={()=>{Alldetails(itm)}}>
            <img className="smallimg" src={itm.img} alt={itm.title} />
            <h4>
              {" "}
              {itm.title} <br />
              Time To Cook : {itm.timetocook}{" "}
            </h4>
          </div>
        );
      })}
    </div>
  );
};
