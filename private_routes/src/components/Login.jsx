import { useState } from "react/cjs/react.development";

export const Login = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({...formData,
    [name]:value})
  };

  return (
    <div>
      <h3> Login </h3>
      <input type="text" placeholder="Enter email" onChange={handleChange} />
      <input
        type="password"
        placeholder="Enter password"
        onChange={handleChange}
      />
      <button> Login </button>
    </div>
  );
};
