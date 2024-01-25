import { useState } from "react";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import { Form, Link, useActionData } from "react-router-dom";
import { isEmail, isNotEmpty, hasMinLength } from "../../utils/utils.js";
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
              />
            )}
            <Input type="email" id="email" name="email" label="email" />
            <Input
              type="password"
              id="password"
              name="password"
              label="password"
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
              className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
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
