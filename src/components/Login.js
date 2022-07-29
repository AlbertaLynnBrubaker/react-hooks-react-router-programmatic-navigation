import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({isLoggedIn, setIsLoggedIn }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoggedIn(true);

    // after logging the user in, redirect to the home page!
    history.push("/");
  }

  return (
    <>
      {isLoggedIn ? <h1>You are already logged in!</h1> :
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      }
    </>
  );
}

export default Login;
