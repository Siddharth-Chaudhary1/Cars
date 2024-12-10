import React from "react";

const Car = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-3xl text-center mx-4 flex-1">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 tracking-tight leading-tight">
          <span className="text-blue-500">Drive</span> the Future,
          <span className="text-gray-600"> Experience</span> the Ultimate
          <span className="text-black"> BMW.</span>
        </h1>

        <p className="mt-4 text-gray-600">
          Step into a world of unmatched elegance and unparalleled performance
          with BMW. Every drive is an experience, every journey a masterpiece.
        </p>

        <div className="mt-6 space-x-4">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            M5 CS
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
            Other
          </button>
        </div>
      </div>

      <div className="flex-1">
        <img
          src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/topics/magazine-article-pool/2024/wallpaper/m-wallpaper/3-0-csl/bmw-3-0-csl-mi-02.jpg.asset.1669308608803.jpg"
          alt="M5 CS"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Car;
