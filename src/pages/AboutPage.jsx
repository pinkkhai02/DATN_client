import axios from "axios";
import { React, useEffect, useState } from "react";
import MenuLaws from "../components/Menu/MenuLaws";

const AboutPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/getcontent")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);
  return (
    <div className="flex gap-2 p-10 items-start ">
      <div
        dangerouslySetInnerHTML={{ __html: data?.content_law }}
        className="w-8/12 px-4"
      ></div>
      <div className="w-4/12 sticky top-0  ">
        <h2 className="w-full  px-5 py-2 font-bold text-xl text-left text-white border border-b-2 border-gray-200 rounded  bg-[#2f7bfd] uppercase">
          mục lục văn bản
        </h2>
        <MenuLaws />
      </div>
    </div>
  );
};

export default AboutPage;
