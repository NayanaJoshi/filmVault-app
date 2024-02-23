//  With Responsiveness

import React from "react";

function Banner() {
  return (
    <div className="p-5 md:p-10 bg-black">
      <div
        className="h-[20vh] md:h-[50vh] lg:h-[75vh] bg-cover bg-center flex items-end rounded-xl"
        style={{
          backgroundImage: `url(https://wallpapercave.com/wp/wp3891762.jpg)`,
        }}
      >
        <div className="text-white text-lg md:text-xl lg:text-2xl bg-gray-900/60 w-full text-center md:p-4 lg:p-2 rounded-b-xl">
          Avengers Endgame
        </div>
      </div>
    </div>
  );
}

export default Banner;
