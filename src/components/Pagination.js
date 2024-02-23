import React from "react";

function Pagination({ handlePrev, handleNext, pageNo }) {
  return (
    <div className=" flex justify-center bg-gray-900/60 w-full text-center mt-8 p-2">
      <div className="px-8 hover:cursor-pointer" onClick={handlePrev}>
        <i class="fa-solid fa-circle-arrow-left text-white"></i>
      </div>
      <div className="font-bold text-white">{pageNo}</div>
      <div className="px-8 hover:cursor-pointer" onClick={handleNext}>
        <i class="fa-solid fa-circle-arrow-right text-white"></i>
      </div>
    </div>
  );
}

export default Pagination;
