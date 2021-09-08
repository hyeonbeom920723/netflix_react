import React from "react";
import Movie from "../Movie/movie.component";
import "./section.style.css";

const Section = ({ title }) => {
  return (
    <div className="section-container">
      <h2 className="title">{title}</h2>
      <div className="section">
        {/* TODO: Get Data and display each card */}
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
};

Section.defaultProps = {
  title: "This is default title",
};
export default Section;
