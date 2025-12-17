import React from "react";
import { Mail, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom"; // Add this import

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stack vertically on small screens, 3 columns on medium+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lime-400 font-bold text-2xl mb-3">
              UNSHACKLED WARRIOR
            </h3>
            <p className="text-gray-400 max-w-md mx-auto md:mx-0">
              Premium athletic wear designed for champions. Elevate your
              training with gear that matches your ambition
            </p>
          </div>
          {/* Quick Links - Center on mobile, left align on desktop */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-lime-400 transition-colors inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-400 hover:text-lime-400 transition-colors inline-block"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-lime-400 transition-colors inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-lime-400 transition-colors inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Media & Contact Info - Center on mobile, left align on desktop */}{" "}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <p className="text-gray-400 mb-4">
              Connect with us on social media
            </p>
            <div className="flex justify-center md:justify-start space-x-5">
              <a
                href="https://www.instagram.com/unshackled_warrior"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-lime-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/unshackled_warrior"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-lime-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="mailto:unshackled@warrior.com"
                className="text-gray-400 hover:text-lime-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>

            <div className="mt-6 text-gray-400 text-sm">
              <p>Email: unshackled@warrior.com</p>
              <p className="mt-1">
                © {new Date().getFullYear()} Unshackled Warrior
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Premium athletic wear designed for champions</p>
        </div>
      </div>
    </footer>
  );
};
