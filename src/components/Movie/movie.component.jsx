import React from "react";
import "./movie.style.css";

const Movie = ({ data }) => {
  console.log(`movie Info : ${JSON.stringify(data)}`);
  console.log(data.adult);
  const poster_path = data.poster_path;
  const IMG_API = `https://image.tmdb.org/t/p/w200/`;
  // console.log({ key });
  return (
    <div className="each-movie-container">
      <img src={IMG_API + poster_path} alt="poster image"></img>
    </div>
  );
};

export default Movie;
