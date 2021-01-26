import React from "react";

const Html = ({ items }) => {
  return (
    <div className="work-layout">
      {items.map((item) => {
        const { id, title, description, img, live, github } = item;
        return (
          <article key={id} className="card shadow">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={live} target="_blank" rel="noreferrer">
              <img src={img} alt={title} />
            </a>
            <h4>
              GitHub:{" "}
              <a href={github} target="_blank" rel="noreferrer">
                {github}
              </a>
            </h4>
          </article>
        );
      })}
    </div>
  );
};

export default Html;
