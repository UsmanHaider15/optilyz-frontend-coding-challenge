export const baseUrl: string = "https://www.omdbapi.com/";
const apiKey: string = process.env.REACT_APP_OMDB_API_KEY || "";

export const getUrl = (title: string): string =>
  `${baseUrl}?apikey=${apiKey}&t=${title}`;
