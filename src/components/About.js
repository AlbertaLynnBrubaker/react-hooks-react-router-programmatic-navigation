import React from "react";
import { Redirect } from "react-router-dom"

function About({isLoggedIn}) {
  if (!isLoggedIn) return <Redirect to="/login" />

  return <h1>This is my about component!</h1>;
}

export default About;
