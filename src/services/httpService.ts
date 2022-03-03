export const baseUrl: URL = new URL("https://www.omdbapi.com/");
const apiKey: string = process.env.REACT_APP_OMDB_API_KEY || "";

export const getUrl = (title: string): URL => {
  return new URL(`${baseUrl}?apikey=${apiKey}&t=${title}`);
};
