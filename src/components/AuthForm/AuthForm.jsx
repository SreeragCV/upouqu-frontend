import { useState } from "react";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import { Form, Link, useActionData } from "react-router-dom";
import { isEmail, isNotEmpty, hasMinLength } from "../../utils/validations.js";
import Input from "../Input/Input.jsx";

export default function AuthForm({ signup }) {
  const data = useActionData();
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
    !hasMinLength(enteredValues.username, 5) &&
    isNotEmpty(enteredValues.username);
  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    isNotEmpty(enteredValues.email);
  const passwordIsInvalid =
    didEdit.password &&
    !hasMinLength(enteredValues.password, 6) &&
    isNotEmpty(enteredValues.password);

  const ifDisable =
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

  console.log(enteredValues.username);

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
                error={usernameIsInvalid}
                value={enteredValues.username}
                message="username must have atleast 5 characters"
              />
            )}
            <Input
              type="email"
              id="email"
              name="email"
              label="email"
              onChange={(e) => handleInputChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              error={emailIsInvalid}
              value={enteredValues.email}
              message="enter a valid email address"
            />
            <Input
              type="password"
              id="password"
              name="password"
              label="password"
              onChange={(e) => handleInputChange("password", e.target.value)}
              onBlur={() => handleBlur("password")}
              error={passwordIsInvalid}
              value={enteredValues.password}
              message="password must have 6 characters"
            />
            {data && data.errors && (
              <div>
                <a class="text-sm text-[#ff3d3d]" href="#">
                  Username or Email already exists!
                </a>
              </div>
            )}
            <button
              type="submit"
              className={ifDisable ? "bg-[#1e1043] w-max m-auto px-6 py-2 rounded text-white cursor-not-allowed text-sm font-normal" : "bg-[#5e32d6] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"}
              disabled={ifDisable}
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
