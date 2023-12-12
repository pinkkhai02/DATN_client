import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardLaws from "../components/Cards/CardLaws";

const SearchPage = () => {
  const [data, setData] = useState([]);
  const [query] = useSearchParams();
  const keyword = query.get("keyword");

  useEffect(() => {
    console.log(data);
    if (keyword && keyword !== "")
      axios
        .get("http://127.0.0.1:5000/laws/search", {
          params: { keyword: keyword },
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    else setData([]);
  }, [keyword]);
  return (
    <div>
      {keyword != "" ? (
        <div className="pt-8 flex gap-6  justify-center  flex-wrap items-stretch ">
          {data.length > 0 ? (
            data.map((item, index) => <CardLaws item={item} key={index} />)
          ) : (
            <span className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
              Kết quả không được tìm thấy....
            </span>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default SearchPage;
