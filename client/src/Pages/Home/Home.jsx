import React from "react";
import { Link } from "react-router-dom";
import HomeImg from "../../assets/Home.jpg";

const Home = () => {
  return (
    <div className="w-full h-[80vh] flex gap-10 items-center justify-around my-5">
      <div className="flex flex-col gap-10 p-10 items-center">
        <h5 className=" text-2xl text-center leading-10">
          Delivering Deliciousness <br /> to Your Doorstep!
        </h5>
        <h1 className="text-4xl font-black font-mono">
          Order In, <span className="text-red-600">Taste </span>
          the <span className="text-red-600">Win!.</span>
        </h1>

        <Link
          to="/buy"
          className="px-4 py-2 font-bold w-28 text-center bg-red-500 text-white rounded-md"
        >
          ORDER
        </Link>
      </div>
      <div className="w-1/2 h-full overflow-hidden flex items-center justify-center">
        <img src={HomeImg} alt="home image" />
      </div>
    </div>
  );
};

export default Home;
