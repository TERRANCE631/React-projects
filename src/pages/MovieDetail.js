import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import backup from "../Assets/images/backup.png";

export const MovieDetail = () => {
  const [detail, setDetail] = useState({});
  const params = useParams();
  const image = detail.poster_path ? `https://image.tmdb.org/t/p/w500${detail.poster_path}` : backup;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a`);
      const json = await response.json()
      setDetail(json);
    }

    fetchMovies();
    }, [params.id])

    useEffect(() => {
      document.title = `${detail.title}`
    })
    
  return (
    <div>
        <main>
          <section className="flex flex-wrap justify-around py-5">
            <div className="max-w-sm">
              <img className="rounded" src={ image } alt={detail.title} />
            </div>

            <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
                <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{detail.title}</h1>
                <p>{detail.overview}</p>

                { detail.genres ? 
                  <p className="flex flex-wrap gap-5">
                    {detail.genres.map((genre) => (
                        <span className="border rounded my-2 px-[2px] text-center font-semibold border-gray-500" key={genre.id}>{genre.name}</span>
                    )) }
                  </p>
                : ""}

              <div className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                  <p className="ms-2 text-gray-900 dark:text-white">{detail.vote_average}</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                  <a href="#" className=" text-gray-900 dark:text-white">{detail.vote_count} reviews</a>
              </div>
              <div className="my-5">
                <p className="my-2">
                  <span className="font-bold">Duration: </span> 
                  <span className="mx-2"> { detail.runtime } min.</span>
                </p>  
                <p className="my-2">
                  <span className="font-bold">Budget: </span> 
                  <span className="mx-2"> <span>$</span> { detail.budget }</span>
                </p>  
                <p className="my-2">
                  <span className="font-bold">Status: </span> 
                  <span className="mx-2"> { detail.status }</span>
                </p>  
                <p className="my-2">
                  <span className="font-bold">Release date: </span> 
                  <span className="mx-2"> { detail.release_date }</span>
                </p>  
                <p className="my-2">
                  <span className="font-bold">Revenue: </span> 
                  <span className="mx-2"> <span>$</span> { detail.revenue }</span>
                </p>  
                <p className="my-2">
                  <span className="font-bold">IMDB_ID: </span> 
                  <a href={`https://www.imdb.com/title/${detail.imdb_id}`} target="_blank" rel="noreferrer"><span className="mx-2"> { detail.imdb_id }</span></a>
                </p>  
              </div>
            </div>
          </section>
        </main>
    </div>
  )
}

