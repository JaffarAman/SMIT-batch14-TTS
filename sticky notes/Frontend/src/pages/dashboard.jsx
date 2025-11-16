import axios from "axios";
import React, { useRef, useState } from "react";

const Dashboard = () => {
  // console.log("BACKEND_BASE_URL", import.meta.env.VITE_BACKEND_BASE_URL);

  const [filePreview, setfilePreview] = useState(null);
  const [file, setFile] = useState(null);

  const inputRef = useRef(null);

  const uploadImage = async () => {
    try {
      console.log("file", file);

      const formData = new FormData();
      formData.append("profileImage", file);
      const url = `${import.meta.env.VITE_BACKEND_BASE_URL}/image/upload`;
      const response = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  // onClick
  const fileHandler = () => {
    // console.log("inputRef", inputRef.current.click());
    inputRef.current.click();
  };

  // onChange
  const imageHandler = (event) => {
    // console.log("event", event.target.files[0]);
    const imageFile = event.target.files[0];
    setFile(imageFile);
    // const imageUrl = URL.createObjectURL(imageFile);
    // console.log("imageUrl", imageUrl);
    if (imageFile) {
      const reader = new FileReader();
      
      reader.onload = function (e) {
        const base64String = e.target.result; // This is the Base64 data URL
        console.log(base64String);
        setfilePreview(base64String);
        // You can now use this base64String, e.g., to display the image or send it to a server.
      };

      reader.readAsDataURL(imageFile);
    }
  };

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
      alert("success");
    } catch (error) {
      console.log("error", error.response.data.message);
      alert(error.response.data.message);
    }
  };
  return (
    <div>
      <button onClick={createPost}>Create post!</button>
      <button onClick={fileHandler}>Upload Image</button>
      <input type="file" hidden ref={inputRef} onChange={imageHandler} />
      {filePreview && (
        <>
          <img src={filePreview} width={250} height={250} alt="" />
          <button onClick={uploadImage}>Save</button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
