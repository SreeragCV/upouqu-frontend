import React from 'react'
import AuthForm from '../components/AuthForm/AuthForm';
import { useActionData } from 'react-router-dom';

function Signup() {
  const data = useActionData();
  console.log(data);
  return (
    <div>
      <AuthForm signup/>
    </div>
  )
}

export default Signup

export async function action({ request, params }) {
  const formData = await request.formData();
  const userData = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log(userData);
  const response = await fetch("http://localhost:8080/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  })

  if(!response.ok){
    console.log('error');
  }
  console.log(response);
    
  return response;
}
