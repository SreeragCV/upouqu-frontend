import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import { Form, Link, useActionData, useNavigate } from "react-router-dom";
import { isEmail, isNotEmpty, hasMinLength } from "../../utils/validations.js";
import Input from "../Input/Input.jsx";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../../utils/store/AuthSlice.js";

export default function AuthForm({ signup }) {
  const data = useActionData();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const verify = useSelector((state) => state.auth.isVerified);

  useEffect(() => {
    if (!verify) {                         //verifying if user already logged in
      if (data && data.id && token) {
        const id = data.id;
        dispatch(handleLogin({ id }));
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [verify, data, token]);

  const [enteredValues, setEnteredValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    username: false,
    email: false,
    password: false,
  });

  const usernameIsInvalid =
    didEdit.username &&
    !hasMinLength(enteredValues.username, 3) &&
    isNotEmpty(enteredValues.username);
  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    isNotEmpty(enteredValues.email);
  const passwordIsInvalid =
    didEdit.password &&
    !hasMinLength(enteredValues.password, 6) &&
    isNotEmpty(enteredValues.password);

  const ifLoginDisable =
    enteredValues.email === "" ||
    emailIsInvalid ||
    enteredValues.password === "" ||
    passwordIsInvalid;

  const ifSignupDisable =
    enteredValues.email === "" ||
    emailIsInvalid ||
    enteredValues.password === "" ||
    passwordIsInvalid ||
    enteredValues.username === "" ||
    usernameIsInvalid;

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => {
      return {
        ...prevValues,
        [identifier]: value,
      };
    });
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Card
        sx={{ maxWidth: 345, justifyContent: "center", marginTop: "13rem" }}
      >
        <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            {signup ? "Welcome to" : "Welcome back to"}{" "}
            <span className="text-[#7747ff]">UPOUQU</span>
          </div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Log in to your account
          </div>
          <Form method="POST" className="flex flex-col gap-3">
            {signup && (
              <Input
                type="text"
                id="username"
                name="username"
                label="username"
                onChange={(e) => handleInputChange("username", e.target.value)}
                onBlur={() => handleBlur("username")}
                error={data ? data : usernameIsInvalid}
                value={enteredValues.username}
                message={
                  (data && data.username ? data.username : null) ||
                  (!data && "username must have atleast 3 characters")
                }
              />
            )}
            <Input
              type="email"
              id="email"
              name="email"
              label="email"
              onChange={(e) => handleInputChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              error={data ? data : emailIsInvalid}
              value={enteredValues.email}
              message={
                (data && data.email ? data.email : null) ||
                (!data && "enter a valid email address")
              }
            />
            <Input
              type="password"
              id="password"
              name="password"
              label="password"
              onChange={(e) => handleInputChange("password", e.target.value)}
              onBlur={() => handleBlur("password")}
              error={data ? data : passwordIsInvalid}
              value={enteredValues.password}
              message={
                (data && data.password ? data.password : null) ||
                (!data && "password must have 6 characters")
              }
            />
            {data && data.error_message && (
              <div>
                <a class="text-sm text-[#ff3d3d]" href="#">
                  {data.error_message}
                </a>
              </div>
            )}
            <button
              type="submit"
              className={
                (signup && ifSignupDisable) || ifLoginDisable
                  ? "bg-[#1e1043] w-max m-auto px-6 py-2 rounded text-white cursor-not-allowed text-sm font-normal"
                  : "bg-[#5e32d6] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
              }
              disabled={signup ? ifSignupDisable : ifLoginDisable}
            >
              {signup ? "Signup" : "Login"}
            </button>
          </Form>
          {signup ? (
            <div className="text-sm text-center mt-[1.6rem]">
              Already have an account?
              <Link to="/login" className="text-sm text-[#7747ff]">
                Login here!
              </Link>
            </div>
          ) : (
            <div className="text-sm text-center mt-[1.6rem]">
              Don’t have an account yet?
              <Link to="/signup" className="text-sm text-[#7747ff]">
                Sign up for free!
              </Link>
            </div>
          )}
        </div>
      </Card>
    </Grid>
  );
}
