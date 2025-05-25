import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Quiz from "./pages/Quiz.jsx";
import Home from "./pages/Home.jsx";
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Result from "./pages/Result.jsx";

function App() {
  const pathName=location.pathname
  // console.log(pathName)

  const [user,setuser]=useState("")
  console.log(user)


  const [score,setscore]=useState(0)

  console.log(score)

  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route  path="/"  element={<div><Home user={user}  setuser={setuser}/></div>}/>
      <Route path="/Quiz"  element={<div><Quiz  user={user} score={score}  setscore={setscore} /></div>}/>
      <Route path="/Result" element={<div><Result score={score} user={user} /></div>} />
      {/* <Route path="*" element={<h1>404 Page Not found</h1>}/> */}
      <Route path="*" element={<Navigate to={"/"}/>}/>
      
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;
