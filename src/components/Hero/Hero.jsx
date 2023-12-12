import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/logo-luat-2_1587523588.png";

const Hero = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img src={img} alt="" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Truy vấn luật</h1>
          <p className="py-6 max-width">
            Trang website có thế truy vấn luật hôn nhân gia đình mà những điều
            liên quan văn bản luật
          </p>
          <Link to="/about" className="btn btn-primary">
            Đi nào!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
