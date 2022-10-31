import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const Qusetion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <FaPlus /> : <FaMinus />}
        </button>
      </header>
      {showInfo && info}
    </article>
  );
};

export default Qusetion;
