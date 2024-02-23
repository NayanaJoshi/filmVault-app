//  With Responsiveness

import React from "react";
function MovieCard({
  movieObj,
  poster_path,
  overview,
  name,
  handleAddToWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="relative">
      <div
        className="h-[25vh] md:h-[35vh] lg:h-[50vh] w-full bg-center bg-cover rounded-xl hover:scale-110 duration-200"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        <div className="m-4 text-2xl mt-2 text-white/70 w-[20px] flex float-right cursor-pointer">
          <i class="fa-solid fa-circle-info "></i>
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="text-white text-lg md:text-xl lg:text-2xl bg-gray-900/60 w-full text-center items-center p-2 rounded-b-xl">
            {doesContain(movieObj) ? (
              <div
                className="flex float-right w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] justify-center items-center  rounded hover:cursor-pointer"
                onClick={() => handleRemoveFromWatchList(movieObj)}
              >
                &#10060;
              </div>
            ) : (
              <div
                className="flex float-right w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] items-center justify-center rounded hover:cursor-pointer"
                onClick={() => handleAddToWatchList(movieObj)}
              >
                &#128525;
              </div>
            )}

            <div className="truncate">{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
