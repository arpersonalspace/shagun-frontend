import React, { useState, useEffect } from "react";
import "../css/Banner.css";
import axios from "../axios/axios";
import requests from "../axios/requests";
function Banner() {
  const [banner, setBanner] = useState([1]);
  
 
    const screenSize =  window.screen.width;
    
  

  //https://image.tmdb.org/t/p/original/
  useEffect(() => {
    const fetchBanner = async () => {
      const response = await axios
        .get(requests.fetchNetflixOriginal)
        .catch((err) => console.log(err));

      setBanner(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      );
    }; 
    fetchBanner();
  }, []);

   
  //trimming description
  const truncate = (string, n) => {
    const newString =
      string?.length > n ? string.substr(0, n - 1) + " READ MORE..." : string;
    return newString;
  };
  return (
    !banner?.backdrop_path ?   <div id="loader" className="nfLoader"></div>  : <>
    <div
      className="banner "
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4)), url("https://image.tmdb.org/t/p/original/${
          screenSize >780 ? banner?.backdrop_path  : banner?.poster_path
        }")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="navbar__childs   ">
        {/**title */}
        <div className="banner__title">
          <h1> {banner?.name || banner?.title || banner?.original_name}</h1>
        </div>
        {/**buttons */}
        <div className="banner__butoons">
          <button>Play</button>
          <button>My LIst</button>
        </div>
        {/** description*/}
        <div className="banner__description">
          <p>
            {truncate(banner?.overview , screenSize >780 ? 250 : 80
            )}
          </p>
        </div>
      </div>
      <div className="banner_faded"></div>
    </div>
  </> 
  
  );
}

export default Banner;
