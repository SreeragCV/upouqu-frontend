import * as React from "react";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Signup() {
  const inputClass =
    "rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0";
  const labelClass =
    "block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2";
  const invalidClass =
    "block text-gray-600 cursor-text text-sm leading-[140%] font-normal text-[#e82d2d] mt-1";

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Card
        sx={{ maxWidth: 345, justifyContent: "center", marginTop: "10rem" }}
      >
        <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Welcome to <span className="text-[#7747ff]">UPOUQU</span>
          </div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Create your account
          </div>
          <form className="flex flex-col gap-3">
            <div className="block relative">
              <label for="username" className={labelClass}>
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className={inputClass}
              />
              {/* <p className={invalidClass}>invalid username</p> */}
            </div>
            <div class="block relative">
              <label for="email" className={labelClass}>
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className={inputClass}
              />
              {/* <p className={invalidClass}>invalid username</p> */}
            </div>
            <div class="block relative">
              <label for="password" className={labelClass}>
                Password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                className={inputClass}
              />
              {/* <p className={invalidClass}>invalid username</p> */}
            </div>
            <div>
              <a className="text-sm text-[#7747ff]" href="#">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
            >
              Submit
            </button>
          </form>
          <div className="text-sm text-center mt-[1.6rem]">
            Already have an account?
            <Link to="/login" className="text-sm text-[#7747ff]" href="#">
              Login here!
            </Link>
          </div>
        </div>
      </Card>
    </Grid>
  );
}
