import React from "react";
import Container from "../components/common/Container";
import Layout from "../components/Layout";
import TopHeader from "../components/common/TopHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Row from "../components/common/Row";

const Account = () => {
  return (
    <>
      <TopHeader />
      <div className="h-[350px] w-[600px] p-[40px] ml-[25%] bg-[#ebeaeacc] mt-[50px] rounded-[10px] shadow-2xl ">
        <h1 className="text-center mb-[30px] text-[#4e4e4e] text-2xl ">
          Authentication
        </h1>
        <p className="text-[#4e4e4e] mb-[50px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
          quasi fugiat ex ullam reiciendis explicabo eum consequatur
          dignissimos? Totam atque vero eum mollitia iusto, cupiditate veniam
          asperiores minima dolore odio?
        </p>
        <Row >
          <span className=" text-[#706f6f] cursor-pointer font-poppins rounded-full mt-[10px] ml-[110px] !px-7 !py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80">Sign In</span>
          <span className=" text-[#706f6f] cursor-pointer font-poppins rounded-full mt-[10px] ml-[80px] !px-7 !py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80">Register</span>
        </Row>
      </div>
    </>
  );
};

export default Account;
