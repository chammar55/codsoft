import React from "react";

function HomePosts() {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://imgd.aeplcdn.com/1280x720/cw/ec/36254/Toyota-Sera-Exterior-137244.jpg?wm=0"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xll">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>Ammar Ibrahim</p>
          <div className="flex space-x-2">
            <p>16/06/2023</p>
            <p>16:45</p>
          </div>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
          quas. Adipisci dolorem nostrum minima explicabo odio maiores
          laboriosam! Optio aliquid architecto iure dolorem odio consectetur
          fuga delectus. Pariatur, voluptate quod.
        </p>
      </div>
    </div>
  );
}

export default HomePosts;
