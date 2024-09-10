import background from "../img/background.png";
import logo from "../img/logo_long.png";

import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";

function SignIn() {

  const [inputValue, setInputValue] = useState('');
  const [inputValuePas, setInputValuePas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue && !inputValuePas) {
      toast.error('Something went wrong!');
    } else {
      // proceed with form submission
      toast.success('You have successfully sign in!');
    }

  };

  return (
    <>
      <div
        className="w-full h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-[370px] md:w-[480px]  lg:w-[600px]  h-[450px] md:h-[530px] lg:h-[680px] bg-white shadow-md">

          <div className="mt-[35px] md:mt-[50px] lg:mt-[80px] mb-[20px] md:mb-[40px] lg:mb-[80px] flex justify-center items-center">
            <img className="h-7 md:h-8 lg:h-11" src={logo} alt="" />
          </div>

          <div className="text-center text-custom-green-80">
            <h2 className="text-[18px] md:text-xl lg:text-2xl font-bold">Enter Your Account</h2>
            <p className="text-[10px] md:text-[12px] lg:text-[14px] font-medium opacity-60">
              Welcome Back, Please enter Your details
            </p>
          </div>

          <form
            action=""
            onSubmit={handleSubmit}
            className="mt-[20px] flex flex-col justify-center items-center"
          >
            <div className="w-[300px] md:w-[350px] lg:w-[350px] h-[65px] flex justify-center items-center rounded-[10px] border-2 border-custom-green-15">
              <div className="w-[45px] h-[45px] flex justify-center items-center">
                <div className="border-[2px] border-custom-green-15 rounded-[5px] w-[32px] h-[32px] flex justify-center items-center">
                  <i className="bi bi-person text-[20px] text-custom-green-dark"></i>
                </div>
              </div>

              <div className="h-[38px] rounded-[1px] border-[1px] border-custom-green-15"></div>

              <div className="relative flex-auto">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  id="floating_user"
                  className="block px-2.5 pb-2.5 pt-5 w-full text-[14px] font-bold  text-custom-green-dark appearance-none bg-transparent focus:bg-transparent focus:outline-none ring-none focus:ring-none peer"
                  placeholder=""
                  required
                  autoComplete="off"
                />
                <label
                  htmlFor="floating_user"
                  className="absolute text-sm text-custom-green-60 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-custom-green-60 font-bold peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  WeaYaa ID
                </label>
              </div>
            </div>

            <div className="w-[300px] md:w-[350px] lg:w-[350px] h-[65px] mt-[10px] flex justify-center items-center rounded-[10px] border-2 border-custom-green-15">
              <div className="w-[45px] h-[45px] flex justify-center items-center">
                <div className="border-[2px] border-custom-green-15 rounded-[5px] w-[32px] h-[32px] flex justify-center items-center">
                  <i className="bi bi-key text-[20px] text-custom-green-dark"></i>
                </div>
              </div>

              <div className="h-[38px] rounded-[1px] border-[1px] border-custom-green-15"></div>

              <div className="relative flex-auto">
                <input
                  type="password"
                  value={inputValuePas}
                  onChange={(e) => setInputValuePas(e.target.value)}
                  id="floating_password"
                  className="block px-2.5 pb-2.5 pt-5 w-full text-[14px] font-bold  text-custom-green-dark appearance-none bg-transparent focus:outline-none focus:ring-0 peer"
                  placeholder=""
                  required
                  autoComplete="off"
                />
                <label
                  htmlFor="floating_password"
                  className="absolute text-sm text-custom-green-60 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-custom-green-60 font-bold peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Password
                </label>
              </div>
            </div>

            <button className="mt-[20px] w-[300px] md:w-[350px] lg:w-[350px] h-[50px] bg-custom-green-80 hover:bg-custom-green-dark transition text-white font-bold rounded-[10px]">
              Continue
            </button>
          </form>

          <div className="mx-[20px] md:mx-[35px] lg:mx-[74px] my-[20px] md:my-[35px] lg:my-[77px] text-center">
            <p className="text-custom-green-dark font-semibold text-[11px] md:text-[12px] lg:text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              officia similique autem repudiandae inventore iste animi. Dolorum
              enim saepe vitae?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
