import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomError from "./CustomError";
import axios from "axios";
import UserList from "../components/UserList/UserList";

function UsersPage() {
  const verifyAdmin = useSelector((state) => state.auth.role);
  const [fetchUser, setFetchUser] = useState("");

  if (verifyAdmin === "user" || null) {
    return <CustomError />;
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchAllUserData = async () => {
      const response = await axios.get("http://localhost:8080/all-users", {
        headers: {
          token: token ? token : "",
        },
      });
      const users = response.data.users;
      return users;
    };

    fetchAllUserData()
      .then((res) => setFetchUser(res))
      .catch((e) => console.log(e));
  }, []);
  
  return <div>{verifyAdmin === "super-admin" && <UserList users={fetchUser} />}</div>;
}

export default UsersPage;
