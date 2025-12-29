import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Youtube,
  Send,
  Clock,
  CheckCircle,
} from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.2 },
    },
  };

  const iconHoverVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gray-950 min-h-screen text-white py-20 px-4 md:px-6"
    >
      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="max-w-7xl mx-auto text-center mt-10 md:mt-20 space-y-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-semibold"
        >
          Get In Touch
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 max-w-lg mx-auto"
        >
          Have a question or want to get in touch? Fill out the form below and
          we'll get back to you as soon as possible.
        </motion.p>
      </motion.div>

      {/* Form Card */}
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="max-w-5xl border border-white/20 rounded-xl mx-auto bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 mt-12 shadow-xl"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-semibold text-lime-400 mb-2"
        >
          Send us a message
        </motion.h2>
        <p className="text-gray-400 mb-6">
          We typically respond within 24 hours
        </p>

        <div className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition duration-200"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition duration-200"
                placeholder="your@email.com"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition duration-200 resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full md:w-auto flex items-center justify-center gap-2 ${
                  isSubmitting ? "bg-lime-600" : "bg-lime-400 hover:bg-lime-500"
                } text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-lime-400/20`}
              >
                {isSubmitting ? (
                  <>
                    <Clock className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>
        </div>
      </motion.div>

      {/* Contact Info Card */}
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="max-w-5xl border border-white/20 rounded-xl mx-auto bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 mt-8 shadow-xl"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-semibold text-lime-400 mb-6"
        >
          Contact Information
        </motion.h2>

        <div className="space-y-6">
          <motion.div
            variants={itemVariants}
            className="flex items-start gap-4 group cursor-pointer"
          >
            <motion.div
              variants={iconHoverVariants}
              whileHover="hover"
              className="p-3 bg-blue-500/10 rounded-lg"
            >
              <Phone className="w-6 h-6 text-blue-400" />
            </motion.div>
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-400">+27 123-4567</p>
              <p className="text-sm text-gray-500 mt-1">Mon-Fri 9AM-6PM</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-start gap-4 group cursor-pointer"
          >
            <motion.div
              variants={iconHoverVariants}
              whileHover="hover"
              className="p-3 bg-red-500/10 rounded-lg"
            >
              <Mail className="w-6 h-6 text-red-400" />
            </motion.div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-400">contact@unshackledwarrior.com</p>
              <p className="text-sm text-gray-500 mt-1">24/7 support</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-start gap-4 group cursor-pointer"
          >
            <motion.div
              variants={iconHoverVariants}
              whileHover="hover"
              className="p-3 bg-emerald-500/10 rounded-lg"
            >
              <MapPin className="w-6 h-6 text-emerald-400" />
            </motion.div>
            <div>
              <p className="font-medium">Location</p>
              <p className="text-gray-400">
                123 Warrior Street, Battle City, BC 12345
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Visit our headquarters
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Social Media Card */}
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="max-w-5xl border border-white/20 rounded-xl mx-auto bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 mt-8 shadow-xl"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-semibold text-lime-400 mb-2"
        >
          Follow Us
        </motion.h2>
        <p className="text-gray-400 mb-6">
          Stay connected with us on social media for updates and news.
        </p>

        <motion.div variants={containerVariants} className="flex gap-4">
          <motion.a
            href="#"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="p-4 bg-linear-to-br from-pink-500/10 to-purple-500/10 rounded-lg border border-pink-500/20 hover:border-pink-500/40 transition-colors duration-300 group"
          >
            <Instagram className="w-7 h-7 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
            <span className="block text-xs text-gray-400 mt-2">
              @unshackledwarrior
            </span>
          </motion.a>

          <motion.a
            href="#"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="p-4 bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-300 group"
          >
            <Twitter className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            <span className="block text-xs text-gray-400 mt-2">
              @unshackledwarrior
            </span>
          </motion.a>

          <motion.a
            href="#"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="p-4 bg-linear-to-br from-red-500/10 to-orange-500/10 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors duration-300 group"
          >
            <Youtube className="w-7 h-7 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
            <span className="block text-xs text-gray-400 mt-2">
              Unshackled Warrior
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Response Time Info */}
      <motion.div
        variants={itemVariants}
        className="max-w-5xl mx-auto mt-12 p-6 bg-linear-to-r from-lime-400/5 to-blue-400/5 border border-lime-400/20 rounded-xl"
      >
        <div className="flex items-center gap-3 text-lime-400">
          <Clock className="w-5 h-5" />
          <span className="font-medium">Quick Response Time</span>
        </div>
        <p className="text-gray-400 mt-2 text-sm">
          We pride ourselves on responding to all inquiries within 24 hours
          during business days. Your message is important to us!
        </p>
      </motion.div>
    </motion.section>
  );
};
