import React, { useState } from "react";
import { useApi } from "../App";

const Home = () => {
  const { filteredPost, handleUserData } = useApi();
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="px-44 my-10">
        <div className="my-10  text-center">
          <h1 className="font-bold text-4xl">Welcome </h1>
        </div>

        <div>
          {filteredPost.slice(0, 3).map((item, index) => {
            return (
              <div key={index}>
                <div className="my-10 border-y-2"></div>
                <div>UserId:{item.userId}</div>
                <div className="">Title:{item.title}</div>
                <div>Body:{item.body}</div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <div>
            <h2 className="text-2xl mt-5 font-bold">Click the buttons below</h2>
          </div>

          <div className="flex justify-between my-5">
            {/* onclick function handleuserData is being used as it sends numbers that represents userId which is compared using filter in App.jsx DisplayedPost  to display datas */}
            {/* value and setValue states are used here to chnage css making using ternary operation */}
            <button
              onClick={() => {
                handleUserData(1);
                setValue(1);
              }}
              style={{
                backgroundColor: value == 1 ? "cyan" : "black",
                color: value == 1 ? "black" : "white",
              }}
              className="px-4 py-2 bg-black text-white border-2"
            >
              UserId 1
            </button>
            <button
              onClick={() => {
                handleUserData(2);
                setValue(2);
              }}
              style={{
                backgroundColor: value == 2 ? "cyan" : "black",
                color: value == 2 ? "black" : "white",
              }}
              className="px-4 py-2 bg-black text-white border-2"
            >
              UserId 2
            </button>
            <button
              onClick={() => {
                handleUserData(3);
                setValue(3);
              }}
              style={{
                backgroundColor: value == 3 ? "cyan" : "black",
                color: value == 3 ? "black" : "white",
              }}
              className="px-4 py-2 bg-black text-white border-2"
            >
              UserId 3
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
