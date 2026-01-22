import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen  bg-blue-300 flex flex-col">
      
      <div className="shadow-md">
        <Header />
      </div>

      
        <Hero />
      

      <div className=" text-white">
        <Footer />
      </div>

    </div>
  );
};

export default App;
