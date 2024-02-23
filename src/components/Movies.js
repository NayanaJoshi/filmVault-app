// With Responsiveness

import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({
  handleAddToWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [searchMovie, setSearchMovie] = useState("");

  let handleSearchedMovie = (e) => {
    setSearchMovie(e.target.value);
  };

  const handlePrev = () => {
    if (pageNo === 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=9c34c97e45f57c799b449a9fe88089ac&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-2 bg-black">
      <div className="font-bold text-2xl text-center p-4 text-white">
        Trending Movies
      </div>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search Movie"
          className="w-[10rem] h-[1.5rem] md:w-[20rem] md:h-[2rem] bg-gray-200 px-4 rounded-xl"
          onChange={handleSearchedMovie}
          value={searchMovie}
        />
      </div>
      <div className="flex justify-center items-center text-xl text-white   p-1 my-8   ">
        Click "&#128525;" to Add your Favorite Movies to Watchlist!
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies
            .filter((movieObj) => {
              return movieObj.title
                .toLowerCase()
                .includes(searchMovie.toLowerCase());
            })
            .map((movieObj) => (
              <MovieCard
                key={movieObj.id}
                movieObj={movieObj}
                poster_path={movieObj.poster_path}
                overview={movieObj.overview}
                name={movieObj.original_title}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
                watchlist={watchlist}
              />
            ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Pagination
          pageNo={pageNo}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </div>
  );
}

export default Movies;
