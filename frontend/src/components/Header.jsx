import React from "react";
import { FaCartPlus, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" px-5  lg:px-28 shadow-md">
        <div className="navbar  mb-8 flex flex-row justify-between ">
          <div>
            <Link class="btn btn-ghost normal-case text-xl" to={"/"}>
              ProShop
            </Link>
          </div>

          <div className="flex justify-center space-x-5">
            <Link to={"/cart"}>
              <div className="flex hover:font-bold group justify-center items-center space-x-1">
                <FaCartPlus className=" group-hover:scale-125 duration-500  " />
                <div className=" group-hover:text-lg duration-300  ">Cart</div>
              </div>
            </Link>

            <Link to={"/login"}>
              <div className="flex hover:font-bold group justify-center items-center space-x-1">
                <FaUser className=" group-hover:scale-125 duration-500  " />
                <div className=" group-hover:text-lg  duration-300">Signin</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
