import React from "react";
import Macbook from "../assests/Macbook.jpeg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Macbook} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold "> DATA ANALYSIS DASHBOARD </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            eaque voluptatem a repellendus? Dolores, cupiditate. Veniam et enim
            ab debitis sit distinctio. Sequi aut iste qui nemo, accusantium
            asperiores atque! Asperiores.
          </p>
          <button className=" bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-o py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
