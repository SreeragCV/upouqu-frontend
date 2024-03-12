import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { json, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Signup() {
  const isVerified = useSelector((state) => state.auth.isVerified);
  const navigate = useNavigate();

  useEffect(()=>{
    if (isVerified) {
      navigate("/");
    }
  }, [])

  return (
    <div>
     {!isVerified && <AuthForm />}
    </div>
  );
}

export default Signup;

export async function action({ request, params }) {
  const formData = await request.formData();
  const userData = {
    full_name: formData.get('full_name'),
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
  const token = response.headers.get('Authorization');
  localStorage.setItem('token', token)
  const resData = await response.json();
  console.log(resData);
  return resData;
}
