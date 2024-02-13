import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import {
  Form,
  Link,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { isEmail, hasMinLength } from "../../utils/validations.js";
import Input from "../Input/Input.jsx";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../../utils/store/AuthSlice.js";
import loginImage from "../../assets/bg7.jpg";
import signupImage from "../../assets/bg4.jpg";

export default function AuthForm({ signup }) {
  const data = useActionData();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const verify = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // console.log(isSubmitting);
  // console.log(data);
  // console.log(verify);

  useEffect(() => {
    if (!verify.isVerified) {
      //verifying if user already logged in
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
    didEdit.username && !hasMinLength(enteredValues.username, 3);
  const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email);
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 6);

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
    <div
      style={{
        backgroundImage: signup ? `url(${signupImage})` : `url(${loginImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        paddingBottom={signup ? "10.6rem" : "11.8rem"}
        overflow="hidden"
      >
        <Card
          sx={{
            maxWidth: 345,
            justifyContent: "center",
            marginTop: signup ? "14rem" : "16rem",
            borderRadius: "18px",
            boxShadow: "0px 0px 26px 5px  rgba(0, 255, 183, 0.508);",
          }}
        >
          <div className="max-w-md relative flex flex-col p-10 pb-5 text-black background-color: rgb(224 242 254)">
            <div className="text-2xl font-bold mb-2 text-[#9c77ff] text-center">
              {signup ? "Welcome to" : "Welcome back to"}
              <span className="text-[#7747ff]"> UPOUQU</span>
            </div>
            <div className="text-sm font-normal mb-4 text-center text-[#9a75ff]">
              Log in to your account
            </div>
            <Form method="POST" className="flex flex-col gap-3">
              {signup && (
                <Input
                  type="text"
                  id="username"
                  name="username"
                  label="username"
                  onChange={(e) =>
                    handleInputChange("username", e.target.value)
                  }
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
                  <p class="text-sm text-[#ff3d3d]" href="#">
                    {data.error_message}
                  </p>
                </div>
              )}
              <button
                type="submit"
                className={
                  (signup && ifSignupDisable) || ifLoginDisable
                    ? "bg-[#1e1043] w-max m-auto px-6 py-2 rounded text-white cursor-not-allowed text-sm font-normal"
                    : "bg-[#5e32d6] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
                }
                disabled={
                  (signup ? ifSignupDisable : ifLoginDisable) || isSubmitting
                }
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
                  Sign up here!
                </Link>
              </div>
            )}
          </div>
        </Card>
      </Grid>
    </div>
  );
}
