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
  console.log("data", data);
  console.log("filteredPost", filteredPost);
  return (
    <ApiContext.Provider value={{ data, filteredPost }}>
      <Outlet />
    </ApiContext.Provider>
  );
};

export default App;
