import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function UserProfile() {
  const token = localStorage.getItem("token");
  const params = useParams();
  const id = params.id;
  const [fetchUserData, setFetchUserData] = useState({});

  useEffect(() => {
    try {
        console.log('addadas');
      const fetchUser = async () => {
        const response = await fetch(`http://localhost:8080/user/${id}`, {
          headers: {
            token: token,
          },
        });
        if (!response.ok) {
            console.log("error");
        }
        const resData = await response.json()
        setFetchUserData(resData)
      };
      fetchUser();
    } catch (e) {}
  }, []);

  return <div>{fetchUserData.username}</div>;
}

export default UserProfile;
