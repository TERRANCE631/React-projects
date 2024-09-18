import { Routes, Route } from "react-router-dom";
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages";

export const Allroutes = () => {
  return (
    <>
        <Routes>
            <Route path="" element={<MovieList apiPath="movie/now_playing" title="Home" />}></Route>
            <Route path="movie/:id" element={<MovieDetail />}></Route>
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="popular" />}></Route>
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="top_rated" />}></Route>
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="upcoming" />}></Route>
            <Route path="search" element={<Search apiPath="search/movie"/>}></Route>
            <Route path="*" element={<PageNotFound title="404" />}></Route>
        </Routes>
    </>
  )
}
