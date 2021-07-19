import React, { useState, useEffect } from "react";
import "../css/Rows.css";
import axios from "../axios/axios";

function Rows({ title, fetchUrl ,isLarge}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const reponse = await axios
        .get(fetchUrl)
        .catch((err) => console.log(err));

      setMovies(reponse.data.results);
    };

    getMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1>{title}</h1>
      {movies.length ? (
        <div className="row__img ">
         {

           movies.map(data => (
             <img key={data.id} className={isLarge && "poster__large"} src={`https://image.tmdb.org/t/p/original/${isLarge?data.poster_path : data.backdrop_path}`} alt={data.name} />
           ))
         }
        </div>
      ) : (
        <div id="loader" class="nfLoader"></div>
      )}
    </div>
  );
}

export default Rows;
