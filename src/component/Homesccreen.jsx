import React from "react";
import Navabar from "./Navbar";
import Rows from "./Rows";
 
import Banner from "./Banner";
import "../css/homescreen.css";
 

import requests from "../axios/requests";
function Homesccreen() {
  console.log(requests)
  return (
    <div className="homescreen">
      
      <Navabar />
      <Banner />

      <Rows title="netflix-originals" fetchUrl={requests.fetchNetflixOriginal} isLarge={true} />
      <Rows title="trending now" fetchUrl={requests.fetchTrending} />
      
      <Rows title="top-rated" fetchUrl={requests.fetchTopRated} />
      <Rows title="action movie" fetchUrl={requests.fetchActionMovie} />
      <Rows title="comedy movie" fetchUrl={requests.fetchComedyMovie} />
      <Rows title="horror movies" fetchUrl={requests.fetchHorrorMovie} />
      <Rows title="romance movies" fetchUrl={requests.fetchRomanceMovie} />
      <Rows title="documentaries" fetchUrl={requests.fetchDocumnetaries} />
      <Rows title="sci-fi movies" fetchUrl={requests.fetchSciFimovies} />
      
    </div>
  );
}

export default Homesccreen;
