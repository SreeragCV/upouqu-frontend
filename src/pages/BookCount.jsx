import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomError from "./CustomError";
import axios from "axios";

function BookCount() {
  const verifyAdmin = useSelector((state) => state.auth.role);
  const [totalBookCount, setTotalBookCount] = useState("");

  if (verifyAdmin === "user" || null) {
    return <CustomError />;
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchCount = async () => {
      const response = await axios.get("http://localhost:8080/total-books", {
        headers: {
          token: token ? token : "",
        },
      });
      return response;
    };
    fetchCount()
      .then((res) => {
        setTotalBookCount(res.data.rows[0].count);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log(totalBookCount);

  return <div className="mt-28 text-slate-950 text-center text-8xl">{totalBookCount}</div>;
}

export default BookCount;
