import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { json, useActionData } from "react-router-dom";

function Login() {

  const data = useActionData();
console.log(data);
  return (
    <div>
      <AuthForm />
    </div>
  );
}

export default Login;

export async function action({ request, params }) {
  const data = await request.formData();
  const userData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw json(
      { message: "Request failed...please try again" },
      { status: 500 }
    );
  }
  
  console.log(response);
  return response;
}
