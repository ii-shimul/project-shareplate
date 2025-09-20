import FeaturedFoods from "../components/FeaturedFoods";
import HowItWorks from "../components/HowItWorks";
import Slider from "../components/Slider";
import SuccessStories from "../components/SuccessStories";
import Reviews from "../components/Reviews";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <Slider></Slider>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <FeaturedFoods></FeaturedFoods>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <HowItWorks></HowItWorks>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <SuccessStories></SuccessStories>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <Reviews></Reviews>
      </motion.section>
    </motion.main>
  );
};

export default Home;
