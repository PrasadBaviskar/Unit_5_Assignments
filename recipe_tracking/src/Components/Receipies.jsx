import { useEffect, useState } from "react";

export const Receipes = () => {
  var [list, setList] = useState([]);
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/data`)
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  const filterData = (e) => {
    let nlist = list.filter((itm) => {
      if (e.target.value === "all") {
        return list;
      }
      return itm.cat === e.target.value;
    });
    console.log(nlist);
    setList(nlist);
  };

  const Alldetails = (data) => {
    setDetails(data);
  };

  return (
    <div className="all_recs">
      <h3> Receipes </h3>
      <select className="slct" onChange={()=>filterData}>
        <option value="all"> All </option>
        <option value="veg"> Veg </option>
        <option value="nonveg"> Non Veg </option>
      </select>
      {list.map((itm) => {
        return (
          <div
            className="rec_div"
            key={itm.id}
            onClick={() => {
              Alldetails(itm);
            }}
          >
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
