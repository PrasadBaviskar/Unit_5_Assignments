import { useState } from "react";

export const UserForm = ({getData}) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(formData)
    console.log(formData);
  };
  return (
    <div className="userForm">
      <h2>UserForm</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder=" Enter your name" /> <br />
        <input onChange={handleChange} type="number" name="age" placeholder=" Enter your age" /> <br />
        <input onChange={handleChange} type="text" name="addr" placeholder=" Enter your Address" /> <br />
        <select onChange={handleChange} name="department">
          <option> -- Department -- </option>
          <option> Development </option>
          <option> Testing </option>
          <option> Marketing </option>
        </select> <br />
        <input onChange={handleChange} type="text" name="salary" placeholder=" Enter your salary" /> <br />
        {/* <input onChange={handleChange} type="checkbox" name="marital_state" id="marital" placeholder="" />
        <label for="marital"> Married </label> */} <br />
        {/* <input  onChange={handleChange} type="file" name="profile_photo" placeholder="" /> */} <br />
        <input type="submit" value="Sumbit" />
      </form>
    </div>
  );
};

// Name
// Age
// Address
// Department ( select tag )
// Salary
// marital state ( check box )
// profile pgoto ( bonus to pre
