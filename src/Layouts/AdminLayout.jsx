import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-luat-2_1587523588.png";
import Header from "../components/Header/Header";
import { useState } from "react";
// import MenuSideBar from "../components/MenuSide/MenuSideBar";

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="w-72">
        <aside
          className={`${
            open ? "w-72" : "w-24"
          } p-5 pt-8 duration-300  bg-dark-purple fixed top-0 left-0 z-40  h-screen `}
        >
          <svg
            className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 border-2 border-dark-purple bg-white rounded-full  ${
              !open && "rotate-180"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            onClick={() => setOpen(!open)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>

          <Link to="/" className="flex gap-x-4 items-center">
            <img
              src={logo}
              alt=""
              width="40"
              height="40"
              className={`cursor-pointer duration-500 "`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-300 uppercase ${
                !open && "scale-0"
              }`}
            >
              Truy Vấn Luật
            </h1>
          </Link>
          <ul className="pt-10 flex flex-col gap-2">
            <li>
              <Link
                to="/about"
                className="flex items-center p-4 text-[#a6aaae] rounded-lg hover:bg-[#2f7bfd] hover:text-white  "
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 transition duration-75 font-medium "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <span
                  className={`flex-1 ml-3 whitespace-nowrap duration-300 font-medium ${
                    !open && "scale-0"
                  }`}
                >
                  Văn bản luật
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/chat "
                className="flex items-center p-4 text-[#a6aaae] rounded-lg hover:bg-[#2f7bfd] hover:text-white  "
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 transition duration-75 font-medium "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
                <span
                  className={`flex-1 ml-3 whitespace-nowrap duration-300 font-medium ${
                    !open && "scale-0"
                  }`}
                >
                  Trò chuyện
                </span>
              </Link>
            </li>
            {/* <li>
              <Link
                to="/news "
                className="flex items-center p-4 text-[#a6aaae] rounded-lg hover:bg-[#2f7bfd] hover:text-white  "
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 transition duration-75 font-medium "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <span
                  className={`flex-1 ml-3 whitespace-nowrap duration-300 font-medium ${
                    !open && "scale-0"
                  }`}
                >
                  Tin tức
                </span>
              </Link>
            </li> */}
          </ul>
        </aside>
      </div>
      <div
        className={`${!open ? "ml-24" : "ml-[18rem]"} duration-300 h-screen`}
      >
        <div className="w-full">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
