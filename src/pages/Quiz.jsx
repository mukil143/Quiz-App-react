import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


  const questions=[
    {
      questions:"What is React ?",
      options:["A backend framework","A database","A JavaScript library for building user interfaces","A programming language"],
      answers:"A JavaScript library for building user interfaces"
    },
    {
      questions:" Who developed React?",
      options:["Google","Facebook","Microsoft","Twitter"],
      answers:"Facebook"
    },
    {
      questions:"What is used to pass data to a component from outside?",
      options:["setState","render with arguments","props","PropTypes"],
      answers:"props"
    },
    {
      questions:"What is the command to create a new React application using Create React App?",
      options:["npm start react-app","npm install react-app","npx create-react-app my-app","create-react-app install"],
      answers:"npx create-react-app my-app" 
    },
  ]

  // console.log(questions[0].questions)



const Quiz = ({user,score,setscore}) => {

  const navigator=useNavigate()
  

  useEffect(()=>{
    if(user===""){
      navigator("/")
    }
  })


  const [questionidx,setquestionidx]=useState(0);

  const handleAnswer=(selectedanswer)=>{
    if(selectedanswer==questions[questionidx].answers){
      setscore(prev=>prev+1)
    }

    if(questionidx<questions.length-1){
      // console.log(3<3)
      console.log(questions.length-1)
      setquestionidx(prev=>prev+1)
    }
    else{
      navigator("/Result")
    }
    

  }

 

  return (
    <>
    <h1>Quiz Page...!</h1>
    <section>
      
      <h2> {questionidx+1}. {questions[questionidx].questions}</h2>
      <ul style={{listStyle:"none"}} >
        {questions[questionidx].options.map((option,idx)=>(
          <li style={{marginTop:10,textAlign:'center'}} key={idx} ><button onClick={(e)=>{
            
            handleAnswer(option)}} >{option}</button></li>
        ))}
      </ul>
    </section><br /><br /><br /><br /><br />
    <a href="/"><button>Back to Home</button></a>
    </>
  )
}

export default Quiz