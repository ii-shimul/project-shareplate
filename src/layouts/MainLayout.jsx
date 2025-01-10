import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Headroom from "react-headroom";

const MainLayout = () => {
  return (
    <>
      <Headroom className="z-[1000]">
        <div className="bg-blue-100">
          <Navbar></Navbar>
        </div>
      </Headroom>
      <div className="min-h-[calc(100vh-317px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
