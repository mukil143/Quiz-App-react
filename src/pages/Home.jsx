import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ user, setuser }) => {
  // console.log(user)
  // console.log(setuser)

  // const [username, setusername] = useState("");

  // console.log(username);
    const navigator=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();
    navigator("/Quiz")

  }

  
  return (
    <>
      <h1>Welcome to our Quiz App</h1>

      <form
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">Username: </label>
        <input
          onChange={(e) => {
           const {value}=e.target
           console.log(value)
           setuser(value)
          }}
          style={{ padding: 5,outline:"none",border:"2px solid black",borderRadius:"5px"}}
          type="text"
          id="username"
          placeholder="Enter Your name"
        />
        <br />
        <a href="/Quiz">
          <button  type="submit" disabled={!user.length>0} style={{ marginTop: 10 }}>
            Start the quiz
          </button>
        </a>
      </form>
    </>
  );
};

export default Home;
