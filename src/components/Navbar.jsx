import { useContext, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  return (
    <nav className="bg-black bg-opacity-10 text-base-content shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16  items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {
                setIsMobileMenu(!isMobileMenu);
                console.log(isMobileMenu);
              }}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center max-sm:hidden">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-500 hover:bg-gray-700 hover:text-white" */}
                <a
                  href="#"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
                >
                  Available Foods
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
                >
                  Add Food
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
                >
                  Manage My Foods
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
                >
                  My Food Requests
                </a>
              </div>
            </div>
          </div>
          <div
            className={`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`}
          >
            <button
              type="button"
              className={`${
                user ? "" : "hidden"
              } relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>
            {/* Profile dropdown */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className={`${
                    user ? "" : "hidden"
                  } relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="size-8 rounded-full"
                    src={user?.photoURL}
                    alt="User profile picture"
                  />
                </button>
              </div>
            </div>
            <div className={`flex gap-2 ml-3 ${user?.email ? "hidden" : ""}`}>
              <Link to={"/signin"}>
                <AwesomeButton type="primary">SignIn</AwesomeButton>
              </Link>
              <Link to={"/signup"}>
                <AwesomeButton type="secondary">SignUp</AwesomeButton>
              </Link>
            </div>
            <div className={`flex gap-2 ml-3 ${user?.email ? "" : "hidden"}`}>
              <AwesomeButton
                onPressed={() => {
                  logOut();
                }}
                type="primary"
              >
                SignOut
              </AwesomeButton>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={isMobileMenu ? "block sm:hidden" : "hidden sm:hidden"}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-500 hover:bg-gray-700 hover:text-white" */}
          <a
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
          >
            Available Foods
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
          >
            Add Food
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
          >
            Manage My Foods
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
          >
            My Food Requests
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
