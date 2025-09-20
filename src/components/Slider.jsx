import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css"
import { GiBanana } from "react-icons/gi";
import { FaLemon } from "react-icons/fa";

const Slider = () => {
  return (
    <>
      <Swiper
        rewind={true}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper lg:max-h-[calc(100vh-180px)] max-max-sm:h-[300px]"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="sm:h-[100vh] max-sm:h-[300px]"
          >
            <div className="max-sm:pt-10 max-sm:pl-10 pt-52 pl-28 text-[#428526]">
              <h1 className="text-6xl font-bold max-sm:text-3xl">
                Share Food, Spread Love!
              </h1>
              <p className="mt-2 mb-3 text-base italic max-sm:text-sm">
                Join our community to donate or receive fresh food near you.
              </p>
              <p className="text-xl max-sm:text-lg">
                Share your extra food with someone in need.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="sm:h-[100vh] max-sm:h-[300px]"
          >
            <div className="max-sm:pt-24 max-sm:pl-10 pt-52 text-center text-[#f16571]">
              <h1 className="text-6xl font-bold max-sm:text-3xl">
                No Food Should Go to Waste!
              </h1>
              <p className="mt-2 mb-3 text-base italic max-sm:text-sm">
                Together, we can reduce food waste and fight hunger.
              </p>
              <p className="text-xl max-sm:text-lg">
                Your extra food can save someone in need.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="sm:h-[100vh] max-sm:h-[300px]"
          >
            <div className="max-sm:pt-10 max-sm:pr-10 pt-52 text-end pr-28 text-[#fe89a8]">
              <h1 className="text-6xl font-bold max-sm:text-3xl">
                Together, We Can Make a Difference!
              </h1>
              <p className="mt-2 mb-3 text-base italic max-sm:text-sm">
                Donate your fresh food to someone in need.
              </p>
              <p className="text-xl max-sm:text-lg">
                Your small effort can make a big difference.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <div className="custom-prev">
          <GiBanana></GiBanana>
        </div>
        <div className="custom-next">
          <FaLemon></FaLemon>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
