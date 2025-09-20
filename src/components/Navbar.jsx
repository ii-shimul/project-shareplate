import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "/logo.svg";
import { AuthContext } from "../provider/AuthProvider";
import "../../src/index.css";
import { AwesomeButton } from "react-awesome-button";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 56,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
        ...theme.applyStyles("dark", {
          backgroundColor: "#8796A5",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#003892",
    }),
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
    ...theme.applyStyles("dark", {
      backgroundColor: "#8796A5",
    }),
  },
}));

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "not-active dark:text-blue-100")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/available-foods"
          className={({ isActive }) => (isActive ? "active" : "not-active dark:text-blue-100")}
        >
          Available Foods
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/add-food"
              className={({ isActive }) => (isActive ? "active" : "not-active dark:text-blue-100")}
            >
              Add Food
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manage-food"
              className={({ isActive }) => (isActive ? "active" : "not-active dark:text-blue-100")}
            >
              Manage My Food
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/food-requests"
              className={({ isActive }) => (isActive ? "active" : "not-active dark:text-blue-100")}
            >
              My Food Requests
            </NavLink>
          </li>
        </>
      )}
      {location.pathname === "/" && (
        <>
          <li>
            <a href="#how-it-works" className="not-active dark:text-blue-100">
              How It Works
            </a>
          </li>
          <li>
            <a href="#stories" className="not-active dark:text-blue-100">
              Success Stories
            </a>
          </li>
          <li>
            <a href="#reviews" className="not-active dark:text-blue-100">
              Reviews
            </a>
          </li>
        </>
      )}
    </>
  );

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleTheme = (e) => {
    if (e.target.checked) {
      document.querySelector("html").setAttribute("class", "dark");
      setTheme("dark");
    } else {
      document.querySelector("html").setAttribute("class", "light");
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

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
          <img className="h-7" src={logo} alt="" /> SharePlate
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end space-x-2">
        <FormControlLabel onClick={handleTheme} control={<MaterialUISwitch defaultChecked={theme === "dark"} />} />
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
