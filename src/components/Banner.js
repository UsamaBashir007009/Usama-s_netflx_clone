import React, { useEffect, useState } from "react";
import requests from "../requests";
import axios from "../axios";
import "../CSS_Files/Banner.css";

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
function Banner() {
  // Math.floor(Math.random() * request.data.results.length - 1)
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(requests.fetchNetflixOrignals);
      setMovie(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length - 1)
        ]
      );
      return result;
    }
    fetchData();
  }, []);

  //   `url(
  //     "https://image.tmdb.org/t/p/w300/"${movie?.backdrop_path}
  //   )`
  console.log("Called");
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
       https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
     )`,
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {" "}
          {movie?.title || movie?.name || movie?.orignal_name}
        </h1>
        <div className="banner__buttons">
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1>
      </div>
      <div className="fade__bottom" />
    </header>
  );
}

export default Banner;
