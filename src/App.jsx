import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import studentGroup from "./assets/Images/pexels-kampus-5940827.jpg";

import GlobalButton from "./components/Button";
function App() {
  return (
    <div className="w-full h-[500px] bg-[url(./assets/Images/pexels-kampus-5940827.jpg)] bg-no-repeat bg-center bg-cover">
      {/* <div className='w-full h-full  bg-red-600/30 backdrop-brightness-75'> */}
      <div className="w-full h-full bg-gradient-to-r  from-red-900/100 to-red-600/30 backdrop-brightness-75 ">
        <div className="container h-full flex justify-around  mx-auto items-center ">
          <div className="w-full h-full flex flex-col justify-center pl-5 pr-5">

            <h1 className="text-white text-6xl font-normal font-Bebas_Neue mb-3">
              Your Trusted Student <br />
              Storage Solution
            </h1>

            <p className="text-white font-Lato_Regular text-xl font-normal mb-6">
              At Campus Keep Storage, we understand the challenges students face
              when it comes to moving out for the summer. That’s why we offer a
              seamless and stress-free solution for storing your belongings
              during the break.
            </p>

            <div>
             <GlobalButton name="Sign up today"/>
             </div>
          
          </div>
          <div className="w-full h-full flex justify-center items-center">
          <div className="flex  h-3/4 bg-white rounded-xl w-11/12  py-11">
           <div className="flex h-12 w-full justify-center items-center">
            <h2 className="text-[#CD162E] uppercase text-4xl font-semibold">Sign up Today </h2>
           </div>
          
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
