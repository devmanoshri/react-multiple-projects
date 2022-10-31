import React, { useState } from "react";
import "../../style/1-accordion-style.css";
import AccordianData from "../../data/1-accordion-data";
import Question from "./Qusetion";

export default function Main() {
  const [questions, setQuestions] = useState(AccordianData);
  return (
    <main>
      <div className="container">
        <h3>Login Question Answer</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key="{question.id}" {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}
