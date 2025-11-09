import axios from "axios";
import React from "react";

const Dashboard = () => {
  console.log("BACKEND_BASE_URL", import.meta.env.VITE_BACKEND_BASE_URL);

  const createPost = async () => {
    try {
      const body = {
        // title: "2nd Note",
        // note: "Hello world",
        hashtags: "#2nd,#note",
      };
      const url = `${import.meta.env.VITE_BACKEND_BASE_URL}/note/create-note`;
      await axios.post(url, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("success")
    } catch (error) {
      console.log("error" , error.response.data.message)
      alert(error.response.data.message);
    }
  };
  return (
    <div>
      <button onClick={createPost}>Create post!</button>
    </div>
  );
};

export default Dashboard;
