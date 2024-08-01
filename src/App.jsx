import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import studentGroup from "./assets/Images/pexels-kampus-5940827.jpg";
function App() {
  return (
    <div className="w-full h-[500px] bg-[url(./assets/Images/pexels-kampus-5940827.jpg)] bg-no-repeat bg-center bg-cover">
      {/* <div className='w-full h-full  bg-red-600/30 backdrop-brightness-75'> */}
      <div className="w-full h-full bg-gradient-to-r  from-red-900/100 to-red-600/30 backdrop-brightness-75 ">
        <div className="container h-full flex justify-around  mx-auto items-center ">
          <div className="w-full h-full">
            <h1 className="text-white text-5xl font-normal font-Bebas_Neue">
              Your Trusted Student <br />
              Storage Solution
            </h1>

            <p className="text-white font-Lato_Regular text-xl font-normal">
              At Campus Keep Storage, we understand the challenges students face
              when it comes to moving out for the summer. That’s why we offer a
              seamless and stress-free solution for storing your belongings
              during the break.
            </p>

            <div className="flex ">
              <button>Transform Your Look!</button>
              <button>Call Us Today!</button>
            </div>
          </div>
          <div className="w-full h-full">
          <div> world</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
