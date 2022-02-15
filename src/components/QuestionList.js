import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions}) {

useEffect(() => {
  fetch("http://localhost:4000/questions")
  .then(r => r.json())
  .then(json => setQuestions(json))
}, [])

 const allQuestions = questions.map( (question) => {
   console.log("question", question)
   return(
     <QuestionItem
     key={question.id}
     question={question}
     test={"test"}
     quesions={questions}
     setQuestions={setQuestions}

     />
   )
 }) 

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{allQuestions}</ul>
    </section>
  );
}

export default QuestionList;
