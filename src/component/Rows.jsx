import React, { useState, useEffect } from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
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

  //scrolling function
  const [scroll, setScroll] = useState(0);

  //handelTrailer function
  const handelTrailer = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.title || movie.name || movie.original_name || "")
        .then((url) => {
          const urlLink = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlLink.get("v"));
          console.log(trailerUrl);
          console.log(url);
        })
        .catch((err) => console.log(err));
    }
    console.log(movie);
  };

  useEffect(() => {
    console.log(scroll);
  }, [scroll]);

  /// handelScroll

  const handelScroll =   (action) => {
    //start scroll
    let ScrollContainer = document.getElementById("row__Container");

    if  (action === "increase") {
      
      console.log(action ,ScrollContainer);

      ScrollContainer.style.left = 800 ;
    } else {
      if (scroll < 1) {
        setScroll(0);
        console.log("reached to max limit");
      } else {
        setScroll(scroll - 500);

        console.log(action ,ScrollContainer);
      }
    }
  };
  //youtube url
  const opts = {
    width: "100%",
    height: "390",
    playerVars: {
      autoplay: 1,
    },
  };
  console.log(movies)
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__segment">
        <ArrowLeftIcon onClick={() => handelScroll("decrease")}></ArrowLeftIcon>

        <div className="movie_section">
          {movies.length ? (
            <div className="row__img ">
              {movies.map((data) => (
                <div
                  className="row__Container"
                  id="row__Container"
                  key={data.id}
                >
                  <img
                    key={data.id}
                    className={isLarge && "poster__large"}
                    src={`https://image.tmdb.org/t/p/original/${
                      isLarge ? data.poster_path : data.backdrop_path
                    }`}
                    alt={data.name}
                  />
                  <div
                    className="row__containerFooter"
                    onClick={() => handelTrailer(data)}
                  >
                    <h3>{data.title || data.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div id="loader" className="nfLoader"></div>
          )}

          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
        </div>

        <ArrowRightIcon
          onClick={() => handelScroll("increase")}
        ></ArrowRightIcon>
      </div>
    </div>
  );
}

export default Rows;
