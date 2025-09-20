import FeaturedFoods from "../components/FeaturedFoods";
import HowItWorks from "../components/HowItWorks";
import Slider from "../components/Slider";
import SuccessStories from "../components/SuccessStories";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <FeaturedFoods></FeaturedFoods>
      <HowItWorks></HowItWorks>
      <SuccessStories></SuccessStories>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;