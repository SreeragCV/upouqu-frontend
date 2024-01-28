import React, { useEffect, useState } from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { json, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

let initialLoad = true;

function Login() {
  const data = useSelector((state) => state.auth);
  const navigate = useNavigate(); 
  const isLoggedIn = data.isLoggedIn
  

  useEffect(() => {
    if(isLoggedIn && initialLoad){
     return navigate('/')
    }else {
      initialLoad = false;
      navigate('/login')
    }
  }, [initialLoad, isLoggedIn])


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

  if(response.status === 401){
    console.log('username or password incorrect');
    return response;
  }
  if (!response.ok) {
    throw json(
      { message: "Request failed...please try again" },
      { status: 500 }
    );
  }
  const responseToken = response.headers.get("Authorization");
  localStorage.setItem("token", responseToken);
  const resData = response.json();
  console.log(resData);

  return resData
}
