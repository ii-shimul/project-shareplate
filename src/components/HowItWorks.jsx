import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <motion.section
      id="how-it-works"
      className="container md:max-w-3xl max-w-md mx-auto my-10 pt-5"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-semibold text-blue-600 text-center mb-5"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        How It Works
      </motion.h1>
      <motion.ul
        className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.li variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Step 1</time>
            <div className="text-lg font-black">Browse available foods.</div>
            "Explore a wide variety of foods shared by generous donators near
            you. Use filters to find items that suit your needs, from fresh
            produce to packaged meals."
          </div>
          <hr />
        </motion.li>
        <motion.li variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">Step 2</time>
            <div className="text-lg font-black">Request the food you want.</div>
            "Click on the Request button for the food you want, fill out a quick
            form, and wait for confirmation. It's that simple!"
          </div>
          <hr />
        </motion.li>
        <motion.li variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Step 3</time>
            <div className="text-lg font-black">
              Pick up from the specified location.
            </div>
            "Once your request is approved, head to the pickup location at the
            scheduled time to collect your food. Remember to bring a container
            if needed!"
          </div>
        </motion.li>
      </motion.ul>
    </motion.section>
  );
};

export default HowItWorks;
