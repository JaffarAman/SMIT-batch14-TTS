import axios from "axios";
import React from "react";

const Dashboard = () => {
  const createPost = async () => {
    try {
      const body = {};
      const url = "http://localhost:5000/createpost";
      await axios.post(url , body , {
        headers :{
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
      } );
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <button onClick={createPost}>Create post!</button>
    </div>
  );
};

export default Dashboard;
