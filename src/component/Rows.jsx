import React, { useState, useEffect } from "react";
import "../css/Rows.css";
import axios from "../axios/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Rows({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    const getMovies = async () => {
      const reponse = await axios
        .get(fetchUrl)
        .catch((err) => console.log(err));

      setMovies(reponse.data.results);
    };

    getMovies();
  }, [fetchUrl]);

  //handelTrailer function
  const handelTrailer = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
       movieTrailer( movie?.name || movie?.title).then((url) => {
         const urlLink = new URLSearchParams(new URL(url).search)
         setTrailerUrl(urlLink.get("v"));
         console.log(trailerUrl); 
       }).catch(err => console.log(err))
    }  
    console.log(movie)
   
  };

  //youtube url
  const opts = {
    width: "100%",
    height: "390",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      {movies.length ? (
        <div className="row__img ">
          {movies.map((data) => (
            <img
              onClick={() => handelTrailer(data)}
              key={data.id}
              className={isLarge && "poster__large"}
              src={`https://image.tmdb.org/t/p/original/${
                isLarge ? data.poster_path : data.backdrop_path
              }`}
              alt={data.name}
            />
          ))}
        </div>
      ) : (
        <div id="loader" className="nfLoader"></div>
      )}

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
    </div>
  );
}

export default Rows;
