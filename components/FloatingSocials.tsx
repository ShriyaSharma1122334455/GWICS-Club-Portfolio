import React, { useState } from "react";
import LinkedInIcon from "./icons/LinkedInIcon";
import InstagramIcon from "./icons/InstagramIcon";
import EmailIcon from "./icons/EmailIcon";
import ChatIcon from "./icons/ChatIcon";
import CloseIcon from "./icons/CloseIcon";

const FloatingSocials: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <div className="relative flex flex-col items-center">
        {/* The links, shown when open */}
        <div
          className={`transition-all duration-300 ease-in-out flex flex-col items-center space-y-3 mb-3 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 invisible"
          }`}
        >
          <a
            href="mailto:g-wics@njit.edu"
            aria-label="Email GWICS"
            className="bg-white text-slate-600 p-3 rounded-full shadow-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-110"
          >
            <EmailIcon className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/gwicsnjit/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GWICS Instagram"
            className="bg-white text-slate-600 p-3 rounded-full shadow-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-110"
          >
            <InstagramIcon className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/gwics-njit/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GWICS LinkedIn"
            className="bg-white text-slate-600 p-3 rounded-full shadow-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-110"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
        </div>

        {/* The main toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={
            isOpen ? "Close social media links" : "Open social media links"
          }
          className="bg-violet-500 text-white p-4 rounded-full shadow-lg hover:bg-violet-600 transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <ChatIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default FloatingSocials;
