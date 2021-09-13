import React from "react";
import Movie from "../Movie/movie.component";
import "./section.style.css";

const Section = ({ title, movieList }) => {
  // console.log(`movieList : ${JSON.stringify(movieList)}`);
  // const a = JSON.stringify(movieList);
  // console.log(`a : ${a}`);
  return (
    <div className="section-container">
      <h2 className="title">{title}</h2>
      <div className="movie-container">
        {movieList.length > 0 &&
          movieList.map((movie) => <Movie data={movie} />)}
      </div>
    </div>
  );
};

Section.defaultProps = {
  title: "This is default title",
};
export default Section;
