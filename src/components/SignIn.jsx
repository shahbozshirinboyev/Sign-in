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
  // Select Staff/Master START
  const [selectedTab, setSelectedTab] = useState("staff");
  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };
  useEffect(() => {
    let tabs = document.querySelectorAll(".tab");
    let indicator = document.querySelector(".indicator");
    let panels = document.querySelectorAll(".tab-panel");

    // Set initial position of the indicator
    indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
    indicator.style.left =
      tabs[0].getBoundingClientRect().left -
      tabs[0].parentElement.getBoundingClientRect().left +
      "px";

    // Event listeners for tab clicks
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        let tabTarget = tab.getAttribute("aria-controls");

        // Animate indicator
        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left =
          tab.getBoundingClientRect().left -
          tab.parentElement.getBoundingClientRect().left +
          "px";

        // Show/Hide panels with smooth transition
        panels.forEach((panel) => {
          let panelId = panel.getAttribute("id");
          if (tabTarget === panelId) {
            panel.classList.remove("invisible", "opacity-0");
            panel.classList.add("visible", "opacity-100");
          } else {
            panel.classList.add("invisible", "opacity-0");
          }
        });
      });
    });
  }, []);
  // Select Staff/Master END
  return (
    <>
      <div
        className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-[370px] md:w-[480px]  lg:w-[600px]  h-[520px] md:h-[600px] lg:h-[750px] bg-white shadow-md">

          <div className="mt-[35px] md:mt-[50px] lg:mt-[80px] mb-[20px] md:mb-[40px] lg:mb-[80px] flex justify-center items-center">
            <img className="h-7 md:h-8 lg:h-11" src={logo} alt="" />
          </div>

          <div className="text-center text-custom-green-dark">
            <h2 className="text-[18px] md:text-xl lg:text-2xl font-bold">Enter Your Account</h2>
            <p className="text-[10px] md:text-[12px] lg:text-[14px] font-medium opacity-60">
              Welcome Back, Please enter Your details
            </p>
          </div>

          <div
            role="tablist"
            aria-label="tabs"
            className="relative mt-[20px] md:mt-[20px] lg:mt-[20px] w-[300px] md:w-[350px] lg:w-[350px] mx-auto h-[50px] grid grid-cols-2 items-center px-[3px] rounded-[10px] bg-custom-green-15 overflow-hidden transition"
          >
            <div className="absolute indicator w-[170px] h-[44px] my-auto mx-auto top-0 bottom-0 bg-white rounded-[10px]"></div>

            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-1"
              id="tab-1"
              tabIndex="0"
              className="relative block h-10 px-6 tab rounded-full"
              onClick={() => handleTabClick("staff")}
            >
              <span className="text-custom-green-dark font-semibold text-[12px] md:text-[14px] lg:text-[15px]">
                Staff Account
              </span>
            </button>

            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-2"
              id="tab-2"
              tabIndex="-1"
              className="relative block h-10 px-6 tab rounded-full"
              onClick={() => handleTabClick("master")}
            >
              <span className="text-custom-green-dark font-semibold text-[12px] md:text-[14px] lg:text-[15px]">
                Master Account
              </span>
            </button>
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
