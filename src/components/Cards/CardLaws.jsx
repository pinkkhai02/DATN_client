import React, { Fragment } from "react";
import ModelOverView from "../Modal/ModelOverView";

const CardLaws = ({ item }) => {
  return (
    <div>
      <div className="max-w-2xl p-5 bg-white border border-gray-200 rounded-lg shadow ">
        <span className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
          {item.content
            .split(";")
            .map((item, index) =>
              item === "" ? (
                <Fragment key={index}></Fragment>
              ) : (
                <p key={index}> {item}</p>
              )
            )}
        </span>
        <p className="mb-3 font-normal text-gray-700 ">{item.fine}</p>
        <div className="inline-flex items-center text-blue-600 hover:underline">
          <ModelOverView item={item} />
        </div>
      </div>
    </div>
  );
};

export default CardLaws;
