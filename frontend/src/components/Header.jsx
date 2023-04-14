import React from "react";
import { FaCartPlus, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="px-28 shadow-xl">
        <div className="navbar  mb-8 flex flex-row justify-between ">
          <div>
            <a class="btn btn-ghost normal-case text-xl" href="/">
              ProShop
            </a>
          </div>

          <div className="flex justify-center space-x-5">
            <div className="flex group justify-center items-center space-x-1">
              <FaCartPlus className=" group-hover:scale-125 duration-500  " />
              <div className=" group-hover:text-sky-200 ">Cart</div>
            </div>
            <div className="flex group justify-center items-center space-x-1">
              <FaUser className=" group-hover:scale-125 duration-500  " />
              <div className=" group-hover:text-sky-200 ">Signin</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
