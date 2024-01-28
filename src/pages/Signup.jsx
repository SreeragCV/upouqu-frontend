import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { json } from "react-router-dom";

function Signup() {
  return (
    <div>
      <AuthForm signup />
    </div>
  );
}

export default Signup;

export async function action({ request, params }) {
  const formData = await request.formData();
  const userData = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch("http://localhost:8080/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json(
      { message: "Request failed..please try again" },
      { status: 500 }
    );
  }
  const resData = response.json();
  return resData;
}
