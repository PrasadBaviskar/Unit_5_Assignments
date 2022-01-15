import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";

export const ProductDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/allProducts/${id}`)
      .then((details) => details.json())
      .then((d) => setDetails(d));
  }, [id]);

  // console.log(details);
  return (
    <div className="product" >
      <div>
        <img src="https://via.placeholder.com/350" alt="product" />
      </div>
      <div>
        <h3> {details.prod_name} </h3>
        <h5> ₹{details.price} </h5>
      </div>
    </div>
  );
};
