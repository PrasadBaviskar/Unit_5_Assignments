import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

export const AllProducts = () => {
  const [prodList, setProdList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((data) => data.json())
      .then((d) => setProdList(d));
  }, []);

  return (
    <div className="allprods">
      {prodList.map((prod, i) => {
        return (
          <Link key={i} to={`/allProducts/${prod.id}`}>
            <div className="card">
              <img src="https://via.placeholder.com/250" alt="product" />
              <p> {prod.prod_name} </p>
              <p> ₹{prod.price} </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
