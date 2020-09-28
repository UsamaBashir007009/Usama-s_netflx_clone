import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import "../CSS_Files/Row.css";
import movieTrailer from "movie-trailer";

const base_url_images = "https://image.tmdb.org/t/p/w300/";
function Row({ title, fetchURL, isLarge }) {
  const [mov, setMovies] = useState([]);
  const opt = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const [trailerUrL, setTrailerURL] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(fetchURL);
      setMovies(result.data.results);
      return result;
    }
    fetchData();
  }, [fetchURL]);
  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="row__posters">
        {mov.map((m) => (
          <img
            key={m.id}
            onClick={() => {
              console.log(trailerUrL);
              if (trailerUrL) {
                setTrailerURL(null);
              } else {
                movieTrailer(m?.title || m?.name || m?.lable || "")
                  .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerURL(urlParams.get("v"));
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }}
            className={`row_Single_poster ${isLarge && "row__LargePoster"}`}
            src={`${base_url_images}${
              isLarge ? m.poster_path : m.backdrop_path
            }`}
            alt={m.name}
          />
        ))}
      </div>
      {trailerUrL ? <YouTube videoId={trailerUrL} opts={opt} /> : null}
    </div>
  );
}

export default Row;
