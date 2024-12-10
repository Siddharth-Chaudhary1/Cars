import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 shadow-lg">
        <div className="w-[7rem] h-16">
          <img
            src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/explained-m/exlm-og.jpg"
            alt="BMW"
            className="h-full w-full object-cover"
          />
        </div>

        <ul className="inline-flex space-x-4 text-gray-700">
          <li>
            <a href="#" className="hover:text-blue-500">
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Location
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>

        <button className="m-2 p-2 rounded-xl bg-red-500 text-white hover:bg-red-600">
          Login
        </button>
      </nav>
    </div>
  );
};

export default Navigation;
