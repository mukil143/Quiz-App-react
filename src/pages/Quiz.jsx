import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


  const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What is H2O commonly known as?",
    options: ["Oxygen", "Water", "Hydrogen", "Salt"],
    answer: "Water"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    question: "How many days are there in a leap year?",
    options: ["364", "365", "366", "367"],
    answer: "366"
  },
  {
    question: "What color do you get when you mix red and yellow?",
    options: ["Purple", "Green", "Orange", "Brown"],
    answer: "Orange"
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Elephant", "Lion", "Bear"],
    answer: "Lion"
  },
  {
    question: "What do bees produce?",
    options: ["Sugar", "Honey", "Wax", "Milk"],
    answer: "Honey"
  },
  {
    question: "Which is the largest ocean in the world?",
    options: ["Indian Ocean", "Atlantic Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  }
];

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
    if(selectedanswer==questions[questionidx].answer){
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
      
      <h2> {questionidx+1}. {questions[questionidx].question}</h2>
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