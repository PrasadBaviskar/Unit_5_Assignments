import { useState } from "react";
import { MyForm } from "../styled/Myform";

export const AddReceipe = () => {
  const [data, setData] = useState({});

  const handleinput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const AddData = (e) => {
    e.preventDefault();
    //   console.log(data)

    fetch("http://localhost:8000/data", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      setData("");
    });
  };

  return (
    <div>
      <h3> Add Receipe </h3>
      <MyForm onSubmit={AddData} method="POST">
        <input
          required
          type="text"
          name="title"
          placeholder="Enter Title"
          onChange={handleinput}
        />
        <textarea
          rows={5}
          type="text"
          name="ingredients"
          placeholder="Enter ingredients"
          onChange={handleinput}
        />
        <input
          type="text"
          name="timetocook"
          placeholder="time to cook"
          onChange={handleinput}
        />
        <input
          type="text"
          name="img"
          placeholder="Enter image link"
          onChange={handleinput}
        />
        <textarea
          rows={5}
          type="text"
          name="instructions"
          placeholder="Enter instruction"
          onChange={handleinput}
        />
        <input className="sub_btn" type="submit" />
      </MyForm>
    </div>
  );
};

// title, ingredients, time to cook, an image and instructions.
