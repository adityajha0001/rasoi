import { TextField } from "@material-ui/core";
import Link from "next/link";
import { WillDeleteFilesRequest } from "vscode-languageserver-protocol";
import { useState } from "react";




const LoginMain = () => {



  const [input,setInput] =useState([]);

  const handleOn= (e) => {
    setInput((input) => ({
      ...input,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit =()=> {
    console.log(input)
  };
  return (
    <>
      <div className="bg-rose-500 h-screen w-full">
        <div className="py-44 px-16 md:px-64  md:py-64 lg:py-12 xl:py-28 2xl:py-44">
          <div>
            <h1 className="flex justify-center text-4xl font-bold italic text-white">
              Wellcome to
            </h1>
            <h1 className="flex justify-center text-4xl font-bold italic text-white">
              Rasoi
            </h1>
            <h1 className="flex justify-center  mt-4 text-white ">
              Sign in to continue
            </h1>
          </div>
          <div>
            <h1 className="mt-12 mx-8 flex justify-center">
              <TextField
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                id="filled-password-input"
                label="Email"
                type="text"
                name="email"
                autoComplete="current-password"
                onChange={handleOn}
              />
            </h1>
            <h1 className="mt-8 mx-8 flex justify-center">
              <TextField
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                id="filled-password-input"
                label="Password"
                type="password"
                name="password"
                autoComplete="current-password"
                onChange={handleOn}
              />
            </h1>
          </div>
         <Link href={"/forgotPassword"}><h1 className="text-white text-sm ml-28 mt-4 md:ml-36 lg:ml-60 xl:pl-32 2xl:flex justify-center 2xl:mr-64">Forgot password ?</h1></Link>
          <div>
            <h1 className="mt-24 flex justify-center"><button className="px-12 py-4 rounded-lg bg-rose-200 font-bold 2xl: flex justify-center" onClick={handleOnSubmit}>Login</button></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginMain;
