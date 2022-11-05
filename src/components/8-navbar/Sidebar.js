import React, { useState } from "react";
import "../../style/8-navbar-style.css";
import { links, social } from "../../data/8-navbar-data";

function Sidebar() {
  const [showLink, setShowLink] = useState(false);
  return (
    <div className="links-container show-container">
      {showLink && (
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
