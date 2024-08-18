import React from "react";
import { LoginBtn } from "../../ButtonGroup/LoginBtn/LoginBtn";
import { Link } from "react-router-dom";
import { useFormGetData } from "../../../utils/withFormGetData";

export const Login: React.FC = () => {
  

  function validateEmail(email: string): boolean {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  const { formdata, invalidEmail, setInvalidEmail, handleChangeEvent } = useFormGetData();
  


  // console.log(formdata)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateEmail(formdata.email)) {
      setInvalidEmail(false);
      localStorage.setItem("userEmail", formdata.email);
      // localStorage.setItem("usertype", "user");
      // navigate("/nextPage"); // Replace "/nextPage" with the actual route you want to navigate to
    } else {
      setInvalidEmail(true);
    }
  };
  // console.log(formdata.email)
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="flex justify-center text-center items-center mt-[2rem]">
          <div className="border rounded-lg ">
            <div className="pt-5 font-bold text-3xl">Welcome Back!</div>
            <div className="mt-10 text-left ml-9 mr-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={formdata.email}
                    onChange={handleChangeEvent}
                    className={`border-2 rounded-lg w-[100%] p-2 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      invalidEmail ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your Email"
                  />
                  {invalidEmail && (
                    <p className="text-red-500 text-[0.75rem] ml-2 mt-1">
                      Invalid email address
                    </p>
                  )}
                </div>
                <div className="">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formdata.password}
                    onChange={handleChangeEvent}
                    className={`border-2 rounded-lg w-[100%] p-2 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      invalidEmail ? "border-red-500" : ""
                    }`}
                    placeholder="Password"
                  />
                </div>
                <div className="flex justify-center items-center">
                <LoginBtn formdata={formdata} type={'login'} />
                </div>
              </form>

              <div className="flex items-center py-2">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400">OR</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>

              <div className="text-center pb-4 text-[0.75rem]  font-light ">
                <p>
                  <span>Are You Lost ?</span>{" "}
                  <span className="text-blue-800">
                    <Link to={"/register"}>Click Here to Register</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
