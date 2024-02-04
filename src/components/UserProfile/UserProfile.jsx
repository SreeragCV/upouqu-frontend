import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import profile from '../../assets/profile.png'
import { json, useNavigate, useParams } from "react-router-dom";
import classes from "./UserProfile.module.css";

function UserProfile() {
  const token = localStorage.getItem("token");
  const params = useParams();
  const id = params.id;
  const [fetchUserData, setFetchUserData] = useState({});
  const isVerified = useSelector((state) => state.auth.isVerified)
  const navigate = useNavigate();

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
    <div className={classes.container}>
      <div className={classes.dp_name}>
        <img className={classes.avatar} src={profile} />
        <h1 className={classes.username}>{fetchUserData.username}</h1>
      </div>
    </div>
  );
}

export default UserProfile;
