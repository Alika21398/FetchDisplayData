import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";

export const ApiContext = createContext();

export function useApi() {
  return useContext(ApiContext);
}

const App = () => {
  const [data, setData] = useState([]);
  const [filteredPost, setFilteredPost] = useState([]);
  // to store userId that comes from Home.jsx
  const [selectedUserData, setSelectedUserData] = useState([]);

  const API = "https://jsonplaceholder.typicode.com/posts";

  const apiData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data);
      console.log("api", res);

      const filteredData = res.data.filter((post) => post.userId == 1);
      setFilteredPost(filteredData);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    apiData();
  }, []);

  // function that handles data from home component to app

  const handleUserData = (userId) => {
    return setSelectedUserData(userId);
  };

  // filters entire that to display those data that has userId which is sent from home
  const displayedPost = data.filter((post) => post.userId == selectedUserData);

  console.log("data", data);
  console.log("filteredPost", filteredPost);
  console.log("selectedUserData", selectedUserData);

  return (
    <ApiContext.Provider value={{ data, filteredPost, handleUserData }}>
      <Outlet />
      <div className=" text-center border border-b-2 ">
        {/* checking length of data displaying so that if there is no data yet fetched the sentence "Data with userId" is not displayed */}
        {displayedPost.length > 0 && (
          <div className="text-lg font-bold ">
            Data with userId {selectedUserData}
          </div>
        )}

        {displayedPost.map((items, index) => {
          return (
            <div key={index}>
              <div className="my-5"> {items.title}</div>
            </div>
          );
        })}
      </div>
    </ApiContext.Provider>
  );
};

export default App;
