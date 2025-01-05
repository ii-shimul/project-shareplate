import FeaturedFoods from "../components/FeaturedFoods";
import HowItWorks from "../components/HowItWorks";
import Reviews from "../components/Reviews";
import Slider from "../components/Slider";
import SuccessStories from "../components/SuccessStories";

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