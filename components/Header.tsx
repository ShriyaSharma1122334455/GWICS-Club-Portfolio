import React, { useState } from "react";
import type { SectionId } from "../types";
import MenuIcon from "./icons/MenuIcon";
import CloseIcon from "./icons/CloseIcon";

interface HeaderProps {
  activeSection: SectionId;
}

const NavLink: React.FC<{
  section: SectionId;
  activeSection: SectionId;
  children: React.ReactNode;
}> = ({ section, activeSection, children }) => {
  const isActive = activeSection === section;
  return (
    <a
      href={`#${section}`}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        isActive
          ? "text-white bg-violet-400"
          : "text-slate-600 hover:bg-violet-100"
      }`}
    >
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinksContent = (
    <>
      <NavLink section="home" activeSection={activeSection}>
        Home
      </NavLink>
      <NavLink section="about" activeSection={activeSection}>
        About Us
      </NavLink>
      <NavLink section="team" activeSection={activeSection}>
        Meet The Team
      </NavLink>
      <NavLink section="events" activeSection={activeSection}>
        Events
      </NavLink>
    </>
  );

  return (
    <>
      <header className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="#home" className="flex items-center space-x-2">
                <img
                  src="public/gwics.png"
                  alt="GWICS Logo"
                  className="h-12 w-12"
                />
                <span className="text-slate-800 font-semibold hidden sm:block">
                  Graduate Women in Computing Society
                </span>
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-2">
              {navLinksContent}
            </nav>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
                className="p-2"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-2"
          aria-label="Close menu"
        >
          <CloseIcon className="h-6 w-6 text-slate-700" />
        </button>
        <nav
          className="flex flex-col items-center space-y-8"
          onClick={() => setIsMenuOpen(false)}
        >
          {navLinksContent}
        </nav>
      </div>
    </>
  );
};

export default Header;
