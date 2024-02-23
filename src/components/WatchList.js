//With Responsiveness
import React, { useEffect, useState } from "react";
import genreids from "../Utility/genreIDs";

function WatchList({ watchlist, setWatchList, handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  const sortIncreasing = () => {
    const sortedIncreasing = [...watchlist].sort(
      (movieA, movieB) => movieA.vote_average - movieB.vote_average
    );
    setWatchList(sortedIncreasing);
  };

  const sortDecreasing = () => {
    const sortedDecreasing = [...watchlist].sort(
      (movieA, movieB) => movieB.vote_average - movieA.vote_average
    );
    setWatchList(sortedDecreasing);
  };

  useEffect(() => {
    const temp = new Set(
      watchlist.map((movieObj) => genreids[movieObj.genre_ids[0]])
    );
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <div className="bg-black p-4 md:p-10">
      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap">
        {genreList.map((genre) => (
          <div
            key={genre}
            onClick={() => handleFilter(genre)}
            className={`border ${
              currGenre === genre
                ? "bg-purple-950 text-white"
                : "bg-gray-300 text-black "
            } flex p-2 justify-center items-center rounded-xl mx-2 h-[2rem] md:w-[9rem] font-bold  mb-4 cursor-pointer`}
          >
            {genre}
          </div>
        ))}
      </div>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search Movie"
          className="w-[10rem] md:w-[20rem] h-[1.5rem] md:h-[2rem]  bg-gray-300 px-4 rounded-xl"
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className="overflow-x-auto  border-2 rounded-xl">
        <table className="w-full text-gray-600 text-center bg-purple-950 text-white border-collapse md:hidden ">
          <tbody>
            {watchlist
              .filter((movieObj) =>
                currGenre === "All Genres"
                  ? true
                  : genreids[movieObj.genre_ids[0]] === currGenre
              )
              .filter((movieObj) =>
                movieObj.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movieObj) => (
                <tr key={movieObj.id} className="border-b-2">
                  <td className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-shrink-0">
                        <img
                          src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                          className="w-[7rem] h-[10rem] rounded-xl mr-4"
                          alt="movie"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="font-bold border rounded bg-gray-300 text-purple-950 p-1">
                          {movieObj.title}
                        </div>
                        <div className="text-white">
                          <div className="font-bold"> Rating: </div>
                          {movieObj.vote_average}
                        </div>
                        <div className="text-white">
                          <div className="font-bold"> Popularity: </div>
                          {movieObj.popularity}
                        </div>
                        <div className="text-white">
                          <div className="font-bold"> Genre: </div>
                          {genreids[movieObj.genre_ids[0]]}
                        </div>
                      </div>
                      <div
                        className="flex-shrink-0 cursor-pointer"
                        onClick={() => handleRemoveFromWatchList(movieObj)}
                      >
                        <span className="font-bold text-red-600 px-4 py-2">
                          Delete
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <table className="w-full text-gray-600 text-center bg-purple-950 text-white border-collapse hidden md:table">
          <thead className="bg-gray-300 text-black">
            <tr>
              <th>Name</th>
              <th className="flex justify-center items-center gap-2">
                <div onClick={sortIncreasing}>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div>Ratings</div>
                <div onClick={sortDecreasing}>
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) =>
                currGenre === "All Genres"
                  ? true
                  : genreids[movieObj.genre_ids[0]] === currGenre
              )
              .filter((movieObj) =>
                movieObj.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movieObj) => (
                <tr key={movieObj.id}>
                  <td className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-shrink-0">
                        <img
                          src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                          className="w-[7rem] h-[10rem] rounded-xl mr-4"
                          alt="movie"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="font-bold  border rounded bg-gray-300 text-purple-950 p-1">
                          {movieObj.title}
                        </div>
                      </div>
                      <div
                        className="flex-shrink-0 cursor-pointer"
                        onClick={() => handleRemoveFromWatchList(movieObj)}
                      ></div>
                    </div>
                  </td>
                  <td className="text-white">{movieObj.vote_average}</td>
                  <td className="text-white">{movieObj.popularity}</td>
                  <td className="text-white">
                    {genreids[movieObj.genre_ids[0]]}
                  </td>
                  <td
                    className="text-red-600 font-bold cursor-pointer px-4 py-2"
                    onClick={() => handleRemoveFromWatchList(movieObj)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WatchList;
