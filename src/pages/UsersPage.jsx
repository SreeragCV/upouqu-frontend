import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomError from "./CustomError";
import axios from "axios";
import UserList from "../components/UserList/UserList";
import withAuth from "../HOC/withAuth";

function UsersPage() {
  const verifyAdmin = useSelector((state) => state.auth.role);
  const [fetchUser, setFetchUser] = useState("");
  const [error, setError] = useState();

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
      .catch((e) => setError(e));
  }, []);

  if (error) {
    return <CustomError />;
  }

  return (
    <div>{verifyAdmin === "super-admin" && !error && <UserList users={fetchUser} />}</div>
  );
}

export default withAuth(UsersPage);
