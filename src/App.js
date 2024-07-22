import React from "react";
import reviews from "./data"
import Testimonial  from "./components/Testimonial";

const App = () => {
  const a=[];
  reviews.map((data)=>{
    return(a.push(data));
  });
  return (
    <div className="flex flex-col justify-center items-center  w-[100vw] h-[100vh] bg-gray-200" >
      <div className="text-center">
        <h1 className=" text-4xl font-bold" >Our Testimonials</h1>
      </div>
      <div className="bg-violet-400 h-[4px] w-48 mt-1"></div>
      <Testimonial data={a} />
    </div>
  );
};

export default App;