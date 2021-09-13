import React from "react";
import "./movie.style.css";

const Movie = ({ data }) => {
  console.log(`movie Info : ${JSON.stringify(data)}`);
  console.log(data.adult);
  const IMG_API = `https://image.tmdb.org/t/p/w200/`;
  const poster_path = data.poster_path;
  const original_title = data.original_title;
  const release_date = data.release_date.substr(0, 4);
  // console.log({ key });
  return (
    <div className="each-movie-container">
      <div className="image-container">
        <img src={IMG_API + poster_path} alt="poster image"></img>
      </div>
      <div className="info">
        <span className="original-title">{original_title}</span>
        <span className="release-date">{release_date}</span>
      </div>
    </div>
  );
};

export default Movie;
