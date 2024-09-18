import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=2d1bab3775de3b5b6aa36247f5a900d4&query=${queryTerm}`

  useEffect(() => {
    async function fectchMovies(){
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fectchMovies();
  }, [url])
  
  return (
    {data}
  )
}


