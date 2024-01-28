import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Contribute() {

  const data = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const isVerified = data.isVerified

  useEffect(() => {
    if(!isVerified){
      navigate('/redirect')
    }
  }, [])

  return (
    <div>
      <h1>Contribute</h1>
    </div>
  );
}

export default Contribute;
