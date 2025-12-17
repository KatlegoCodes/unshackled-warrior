import React from "react";
import { Mail, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-24">
          <div className="flex flex-col md:items-start gap-3">
            <h3 className="text-lime-400 font-bold text-2xl">
              UNSHACKLED WARRIOR
            </h3>

            <p className="text-gray-400 sm:max-w-md">
              Preamium athletic wear designed for champions. Elevate your
              training with gear that matches your ambition
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-lime-400 transition"
                >
                  Home
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="#shop"
                  className="text-gray-400 hover:text-lime-400 transition"
                >
                  Shop
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-lime-400 transition"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>

            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/unshackled_warrior"
                className="hover:text-lime-400"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/unshackled_warrior"
                className="hover:text-lime-400"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a href="unshackled@warrior.com" className="hover:text-lime-400">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
