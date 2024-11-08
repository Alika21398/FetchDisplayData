import React from "react";
import { useApi } from "../App";

const Home = () => {
  const { data, filteredPost } = useApi();
  return (
    <>
      <div className="px-44 my-10">
        <div className="my-10  text-center">
          <h1 className="font-bold text-4xl">Welcome </h1>
        
        <h2 className="text-2xl mt-5">Click the buttons below</h2>
        </div>


        <div className="flex justify-between">
            <button>UserId</button>
            <button>UserId</button>
            <button>UserId</button>
        </div>
        {filteredPost.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
      </div>
    </>
  );
};

export default Home;
