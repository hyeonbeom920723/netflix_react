import Nav from "./components/Nav/nav.component";
import Section from "./components/Section/section.component";
import "./index.css";
import React, { useState, useEffect } from "react";

function App() {
  // const [API, setAPI] = useState("Default API");
  // const getAPI = () => {
  //   setAPI("I will fetch API here");
  // };
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [now_playing_movies, set_now_playing_movies] = useState([]);
  const [upcoming_movies, set_upcoming_movies] = useState([]);
  const [popular_movies, set_popular_movies] = useState([]);
  // const [top_rated_tv, set_top_rated_tv] = useState([]);
  // const [popular_tv, set_popular_tv] = useState([]);
  // const [air_tv, set_air_tv] = useState([]);
  // useEffect(() => {
  //   Promise.all([
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
  //     ).then((data) => data.json()),
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
  //     ).then((data) => data.json()),
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  //     ).then((data) => data.json()),
  //     fetch(
  //       `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  //     ).then((data) => data.json()),
  //     fetch(
  //       `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  //     ).then((data) => data.json()),
  //     fetch(
  //       `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`
  //     ).then((data) => data.json()),
  //   ]).then((allResponse) => {
  //     set_now_playing_movies(allResponse[0].results);
  //     // set_upcoming_movies(allResponse[1]);
  //     // set_popular_movies(allResponse[2]);
  //     // set_top_rated_tv(allResponse[3]);
  //     // set_popular_tv(allResponse[4]);
  //     // set_air_tv(allResponse[5]);
  //   });
  // }, []);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(`data : ${JSON.stringify(data)}`);
        set_now_playing_movies(data.results);
      });
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results);
        set_upcoming_movies(data.results);
      });
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results);
        set_popular_movies(data.results);
      });
  }, [API_KEY]);

  // console.log(now_playing_movies);
  // console.log(set_air_tv);
  // const result = { now_playing_movies };
  // console.log(`result : ${JSON.stringify(result)}`);
  // console.log({ now_playing_movies });
  // console.log(`now_playing_movies : ${JSON.stringify(now_playing_movies)}`);

  return (
    <div className="App">
      <Nav />
      <Section title="Now Playing" movieList={now_playing_movies} />
      <Section title="Upcoming Movies" movieList={upcoming_movies} />
      <Section title="Popular Movies" movieList={popular_movies} />
    </div>
  );
}

export default App;
