import React from "react";
import GwicsLogo from "./icons/GwicsLogo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-1">
                <img src="../gwics.png" alt="GWICS Logo" className="h-10 w-10" />
              </div>
              <img src="../public/nit.png" alt="GWICS Logo" className="h-10 w-10" />
            </div>
            <p className="text-slate-400 text-sm">
              Graduate Women in Computing Society at New Jersey Institute of
              Technology.
            </p>
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} GWiCS. All rights reserved.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              <li>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-violet-300 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-slate-300 hover:text-violet-300 transition-colors"
                >
                  The Team
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-slate-300 hover:text-violet-300 transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gwics-njit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-violet-300 transition-colors"
                >
                  Join Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
