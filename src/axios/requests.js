const API_KEY = "3cb5c79118bb0d0dd551c7b2cc231e42";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginal:`/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovie : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovie : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovie : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovie :`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumnetaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSciFimovies : `/discover/movie?api_key=${API_KEY}&with_genres=878`
  
};

export default requests;

