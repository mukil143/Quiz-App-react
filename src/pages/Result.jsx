import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ score, user }) => {
  const navigator = useNavigate();
//   console.log(user);

  useEffect(() => {
    if (user == "") {
      navigator("/");
    }
  },[]);
  return (
    <>
      <h1>Quiz Completed...</h1>
      <h2>
        Hii <span style={{ textTransform: "uppercase" }}>{user}</span>
      </h2>
      <h3>Your Score : {score}</h3>
      <a href="/">
        <button>Back to Home</button>
      </a>
    </>
  );
};

export default Result;
