import UserProfile from '../components/UserProfile/UserProfile'
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { json, useParams } from "react-router-dom";

function Profile() {

  const token = localStorage.getItem("token");
  const params = useParams();
  const id = params.id;
  const [fetchUserData, setFetchUserData] = useState({});
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
        if (!response.ok) {
          console.log("error");
        }
        if(response.status === 401 || response.status === 400){
        
        }
        const resData = await response.json();
        setFetchUserData(resData);
      };
      fetchUser();
    } catch (e) {
      console.log("server error: ", e);
    }
  }, []);

  return (
    <div>
      <UserProfile userData={fetchUserData}/>
    </div>
  )
}

export default Profile
