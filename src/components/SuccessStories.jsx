import { motion } from "framer-motion";

const SuccessStories = () => {
  const stories = [
    {
      title: "A Fresh Start for Ayesha",
      content:
        "After losing her job, Ayesha struggled to provide meals for her family. Through SharePlate, she was able to access fresh, nutritious food donated by her community. Today, she's back on her feet and volunteers to help others in need.",
    },
    {
      title: "Fighting Food Waste Together",
      content:
        "Rafiq, a local restaurant owner, realized he could share surplus food instead of letting it go to waste. By joining SharePlate, he's helped feed dozens of families in his neighborhood while reducing food waste.",
    },
    {
      title: "A Community United",
      content:
        "When the floods hit their village, residents came together using SharePlate to share resources and food supplies. The platform became a lifeline, showing the power of collective effort in tough times.",
    },
  ];

  return (
    <motion.section
      id="stories"
      className="py-10 bg-blue-50 dark:bg-black dark:bg-opacity-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <div className="md:max-w-[85%] mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-semibold text-blue-600 text-center mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Success Stories
        </motion.h2>
        <motion.p
          className="text-center text-lg text-gray-600 mb-8"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          See how SharePlate is making a difference in the lives of people and
          communities around us.
        </motion.p>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="card bg-white dark:bg-black  shadow-md rounded-lg p-6 transform hover:scale-105 transition duration-300"
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } }}
            >
              <h3 className="text-xl font-bold text-blue-500  mb-4">
                {story.title}
              </h3>
              <p className="text-gray-700 dark:text-white dark:opacity-60">{story.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SuccessStories;
