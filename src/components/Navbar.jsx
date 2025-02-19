import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "/logo.svg";
import { AuthContext } from "../provider/AuthProvider";
import "../../src/index.css";
import { AwesomeButton } from "react-awesome-button";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/available-foods"
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          Available Foods
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/add-food"
              className={({ isActive }) => (isActive ? "active" : "not-active")}
            >
              Add Food
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manage-food"
              className={({ isActive }) => (isActive ? "active" : "not-active")}
            >
              Manage My Food
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/food-requests"
              className={({ isActive }) => (isActive ? "active" : "not-active")}
            >
              My Food Requests
            </NavLink>
          </li>
        </>
      )}
      {location.pathname === "/" && (
        <>
          <li>
            <a href="#how-it-works" className="not-active">
              How It Works
            </a>
          </li>
          <li>
            <a href="#stories" className="not-active">
              Success Stories
            </a>
          </li>
          <li>
            <a href="#reviews" className="not-active">
              Reviews
            </a>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar md:max-w-[85%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white/30 backdrop-blur-md rounded-box z-[100] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl max-sm:btn-sm">
          {" "}
          <img className="h-7" src={logo} alt="" /> SharePlate
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {user && user.photoURL ? (
          <div className="avatar online cursor-pointer">
            <div className="w-12 max-sm:w-8 rounded-full">
              <img alt="user image" src={user.photoURL} />
            </div>
          </div>
        ) : user ? (
          <div className="online cursor-pointer">
            <div className="w-12 max-sm:w-8 rounded-full">
              <img
                alt="user image"
                src="https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000"
              />
            </div>
          </div>
        ) : (
          <div className="online cursor-pointer">
            <div className="w-12 max-sm:w-8 rounded-full">
              <img
                alt="user image"
                src="https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000"
              />
            </div>
          </div>
        )}
        {user ? (
          <div
            onClick={() => {
              logOut();
            }}
            className={`ml-3 ${user?.email ? "" : "hidden"}`}
          >
            <AwesomeButton type="primary">SignOut</AwesomeButton>
          </div>
        ) : (
          <div className="space-x-2">
            <Link to={"/signin"} className="max-sm:hidden">
              <AwesomeButton type="primary">SignIn</AwesomeButton>
            </Link>
            <Link to={"/signup"}>
              <AwesomeButton type="secondary">SignUp</AwesomeButton>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
