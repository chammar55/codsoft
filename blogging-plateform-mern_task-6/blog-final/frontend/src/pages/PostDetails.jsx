import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

function PostDetails() {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>Ammar Ibrahim</p>
          <div className="flex space-x-2">
            <p>16/06/2023</p>
            <p>16:45</p>
          </div>
        </div>
        <img
          src="https://imgd.aeplcdn.com/1280x720/cw/ec/36254/Toyota-Sera-Exterior-137244.jpg?wm=0"
          className="w-full mx-auto mt-8"
          alt=""
        />
        <p className="mx-auto mt-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          quisquam aspernatur, eius temporibus a blanditiis laborum? Incidunt
          architecto aliquam libero harum iure voluptatum. Perferendis iste
          officia magni excepturi. Vel, dolorum!
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Catagories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Ai</div>
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments</h3>
          {/* ************* Comments ****************/}
          <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-600">@Umer</h3>
              <div className="flex  justify-center items-center space-x-4">
                <p className="text-gray-500 text-sm">16/06/2023</p>
                <p className="text-gray-500 text-sm">16:45</p>
                <div className="flex items-center justify-center space-x-2">
                  <p>
                    <BiEdit />
                  </p>
                  <p>
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>

            <p className="px-4 mt-2">Nice information!!</p>
          </div>
          {/* ************* Comments ****************/}
          <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-600">@Umer</h3>
              <div className="flex  justify-center items-center space-x-4">
                <p className="text-gray-500 text-sm">16/06/2023</p>
                <p className="text-gray-500 text-sm">16:45</p>
                <div className="flex items-center justify-center space-x-2">
                  <p>
                    <BiEdit />
                  </p>
                  <p>
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>

            <p className="px-4 mt-2">Nice information!!</p>
          </div>
        </div>
        {/* write a comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input
            type="text"
            placeholder="write a comment"
            className="md:w-[80%] outline-none  py-2 px-4 mt-4 md:mt-0"
          />
          <button className="bg-black text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">
            Add Comment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PostDetails;
