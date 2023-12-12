import React from "react";
// import { Modal, Button } from "flowbite-react";

const ModelOverView = ({ item }) => {
  return (
    <div>
      <label htmlFor={item.id} className="btn">
        Xem chi tiết
        {/* {console.log(item.content)} */}
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={item.id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-2xl uppercase text-black">
            Xem chi tiết vi phạm
          </h3>
          <p className="py-4 text-lg text-black">
            <span className="font-bold">Nội dung vi phạm:</span>
            {item.content}
          </p>
          <p className="py-4 text-lg text-black">
            <span className="font-bold">Xử phạt :</span> {item.fine}
          </p>
          <p className="py-4 text-lg text-black">
            <span className="font-bold">Hành vi vi phạm :</span> {item.detail}
          </p>
          <p className="py-4 text-lg text-black">
            <span className="font-bold">Chi tiết: </span> {item.legal}
          </p>
          <div className="modal-action">
            <label htmlFor={item.id} className="btn">
              Thoát!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelOverView;
