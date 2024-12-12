const apiKey = "8356f422f1c6ed8f7bb8bfb3976e8e34";
const baseUrl = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const url = `${baseUrl}/movie/popular?api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query = "") => {
  const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
    query
  )}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};
