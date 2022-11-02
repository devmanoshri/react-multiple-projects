import React, { useState } from "react";
import "../../style/5-lorem-ipsum-generator.css";
import data from "../../data/5-lorem-ipsum-generator-data";

function Main() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handelSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > data.length + 1) {
      amount = data.length;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h3>Let's try new Lorem Ipsum...</h3>
      <form className="lorem-form" onSubmit={handelSubmit}>
        <label for="number">Paragraph:</label>
        <input
          type="number"
          id="number"
          name="number"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button className="btn">Generator</button>
      </form>
      <article>
        {text.map((paragraph, indexPara) => (
          <p key={indexPara}>
            {indexPara + 1}.{paragraph}
          </p>
        ))}
      </article>
    </section>
  );
}

export default Main;
