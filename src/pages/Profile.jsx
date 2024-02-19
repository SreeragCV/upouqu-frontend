import UserProfile from '../components/UserProfile/UserProfile'
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { json, useParams } from "react-router-dom";
import CustomError from './CustomError';

function Profile() {

  const token = localStorage.getItem("token");
  const params = useParams();
  const id = params.id;
  const [fetchUserData, setFetchUserData] = useState({});
  const [error, setError] = useState();
  const isVerified = useSelector((state) => state.auth.isVerified)

  if(!isVerified){
    throw json({
      message: 'Error Buddy'
    }, {status: 401})
  }

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const response = await fetch(`http://localhost:8080/user/${id}`, {
          headers: {
            token: token,
          },
        });
        let errors = {}
        if (response.status === 500) {
          errors.title = 'ERROR!!!!'
          errors.message = 'Please try again..' 
        }
        if(response.status === 404){
          console.log('404');
          errors.title = 'No user found'
          errors.message = 'Please try again'
        }

        if(Object.keys(errors).length > 0){
           setError(errors)
        }

        const resData = await response.json();
        setFetchUserData(resData);
      };
      fetchUser();
    } catch (e) {
      console.log("server error: ", e);
    }
  }, []);

  console.log(fetchUserData);

  if(error && error.message && error.title){
    return <CustomError title={error.title} message={error.message}/>
  }

  return (
    <div>
      {!error && <UserProfile userData={fetchUserData}/>}
    </div>
  )
}

export default Profile
