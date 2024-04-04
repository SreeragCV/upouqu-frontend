import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../utils/store/AuthSlice";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch(handleLogout());
        navigate("/login");
      }
    }, [dispatch, navigate]);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
