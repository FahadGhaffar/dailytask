import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import studentGroup from "./assets/Images/pexels-kampus-5940827.jpg";


import { GlobalButton,PasswordField } from "./components";
// import GlobalButton from "./components/Button";
import { Form } from "./Form";
function App() {
  return (
    <>    <section className="w-full  bg-[url(./assets/Images/pexels-kampus-5940827.jpg)] bg-no-repeat bg-center bg-cover">
      {/* <div className='w-full h-full  bg-red-600/30 backdrop-brightness-75'> */}
      <div className="w-full py-12 h-full bg-gradient-to-r  from-red-900/100 to-red-600/30 backdrop-brightness-75 ">
        <div className="container flex flex-col h-full justify-around mx-auto items-center  md:flex-row">
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
          <div className="w-full h-full flex justify-center items-center mt-11 md:my-0 ">
          <div className="flex flex-col   h-3/4 bg-white rounded-xl w-10/12  py-11 md:w-10/12">
           <div className="flex  h-12 w-full justify-center items-center">
            <h2 className="text-[#CD162E] uppercase text-4xl font-semibold">Sign up Today </h2>
           

           </div>
           <div className="w-full h-full px-4"><Form/> </div>
            {/* <div className="w-full h-full">hello </div> */}
          </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full ">
      <div className="w-full container py-12 h-full  mx-auto flex justify-center items-center">
          
    <PasswordField/>
      </div>

    </section>
    </>

  );
}

export default App;
