import React, { useState, useContext, useEffect } from "react";
import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Home/Home";

const LoginForm = () => {
  const { state, fungsi } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.user != null) {
      navigate("/dashboard");
    }
  }, [state, navigate]);

  const tampungData = {
    name: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };

  const [data, setData] = useState(tampungData);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setData({
      ...data,
      name: data.name,
      password: data.password,
      isSubmitting: true,
      errorMessage: null,
    });
    try {
      await axios
        .post("http://localhost:8080/login", {
          name: data.name,
          password: data.password,
        })
        .then((res) => {
          if (res.status === 200) {
            fungsi({
              type: "LOGIN",
              payload: res.data,
            });
            // console.log(res.data)
            navigate("/dashboard");
          }
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
        setData({
          ...data,
          errorMessage: error.response.data.msg,
        });
        console.log(data);
      }
    }
  };

  return (
    <div>
      <title>LOGIN PAGE | Kodehack</title>
      <div className="bg-gradient-to-tl from-gray-400 via-gray-900 to-black">
        <div className="flex items-center justify-center min-h-screen">
          <section className="text-gray-600 body-font w-4/5">
            <div className="container px-5 py-24 mx-auto items-center justify-center flex">
              <form onSubmit={onSubmit}>
                <div className="sm:w-auto border-r-2 flex flex-col items-center justify-center">
                  <div className="flex leading-10 bg-white rounded-md mb-2 mx-16">
                    <p className="p-2">
                      <UserCircleIcon className="w-8 h-8 text-black" />
                    </p>
                    <input
                      type="text"
                      className="rounded-r-md text-lg ml-2 pl-2 focus:outline-none"
                      placeholder="Username"
                      name="name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex blog leading-10 bg-white rounded-md mb-2">
                    <p className="p-2">
                      <LockClosedIcon className="w-8 h-8 text-black" />
                    </p>
                    <input
                      type="password"
                      className="rounded-r-md text-lg ml-2 pl-2 focus:outline-none"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-2 mx-16 mt-4">
                    {data.errorMessage != null ? (
                      <p className="px-5 text-red-600">{data.errorMessage}</p>
                    ) : null}
                  </div>
                  <div className="mt-5">
                    <button className="px-8 py-2 bg-white text-l text-black rounded-lg font-sans font-bold hover:bg-slate-700 hover:text-white">
                      MASUK
                    </button>
                  </div>
                </div>
              </form>
              <div className="px-4 mx-5">
                <div className="h-auto w-auto flex">
                  <img
                    alt="content"
                    className="object-center h-52 w-52 "
                    src="images/kodehack.png"
                  />
                  <div className="text-white flex justify-center items-center">
                    <p className="font-bold text-5xl ml-7">KODEHACK</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
