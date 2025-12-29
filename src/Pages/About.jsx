import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import background_image from "../assets/image.png";

export const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(163, 230, 53, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gray-950 text-white min-h-screen py-20 px-4 sm:px-6"
    >
      {/* Hero Section */}
      <motion.div
        variants={itemVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl sm:text-5xl font-semibold mt-10 sm:mt-20 mb-8 sm:mb-12">
          Made for athletes, <span className="text-lime-400">By Athletes</span>
        </h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-400 max-w-4xl mb-6 sm:mb-8"
        >
          Born from a passion for excellence and driven by the pursuit of peak
          performance, Gym Attire was founded by athletes who understood what
          was missing in the market.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-400 max-w-4xl mb-8"
        >
          Every piece in our collection is designed with one goal in mind, to
          help you perform at your absolute best, whether you're crushing your
          morning workout or competing at the highest level.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link to="/shop">
            <button className="bg-lime-400 text-black px-6 py-3 rounded-xl font-semibold cursor-pointer hover:scale-105 transition-transform duration-300 active:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/30">
              Shop Our Story
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        variants={imageVariants}
        whileHover="hover"
        className="max-w-6xl mx-auto mt-12 sm:mt-16 px-4 sm:px-6"
      >
        <img
          src={background_image}
          alt="Athlete wearing Gym Attire"
          className="w-full h-auto rounded-2xl object-cover shadow-2xl"
        />
      </motion.div>

      {/* Values Section */}
      <motion.div
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 sm:mt-40"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center items-center text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
            Our Values
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            The principles that drive everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Performance First",
              description:
                "Every design decision is made with performance in mind. If it doesn't make you better, we don't make it.",
            },
            {
              title: "Quality Without Compromise",
              description:
                "Premium materials, superior construction, and attention to detail in every piece we create.",
            },
            {
              title: "Community Driven",
              description:
                "Built by athletes, tested by champions, and refined through real-world feedback.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="border border-white/10 rounded-xl text-center p-8 bg-gray-900/50 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime-400/10 mb-4"
              >
                <span className="text-lime-400 font-bold text-lg">
                  {index + 1}
                </span>
              </motion.div>
              <h2 className="text-2xl font-semibold text-lime-400 mb-3">
                {value.title}
              </h2>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        variants={containerVariants}
        className="max-w-4xl mx-auto px-4 sm:px-6 mt-32 sm:mt-40 mb-20 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-semibold mb-6"
        >
          Ready to Elevate Your Game?
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto"
        >
          Join thousands of athletes who trust Gym Attire to deliver when it
          matters most.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-lime-400 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-lime-400/30 transition-shadow duration-300"
            >
              Shop Collection
            </motion.button>
          </Link>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white/10 rounded-xl font-semibold hover:border-lime-400 hover:text-lime-400 hover:shadow-lg hover:shadow-lime-400/20 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
