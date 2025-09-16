
import React from 'react';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';
import EmailIcon from './icons/EmailIcon';

const HomePage: React.FC = () => {
  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background video with overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-violet-900/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
          Graduate Women in Computing Society
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto drop-shadow-md">
          Fostering a vibrant community for women in computing at NJIT through mentorship, professional development, and networking.
        </p>
         <div className="flex justify-center space-x-8">
            <a href="https://www.linkedin.com/in/gwics-njit/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-violet-300 transition-colors duration-300 transform hover:scale-110">
              <LinkedInIcon className="h-10 w-10" />
            </a>
            <a href="https://www.instagram.com/gwicsnjit/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-violet-300 transition-colors duration-300 transform hover:scale-110">
              <InstagramIcon className="h-10 w-10" />
            </a>
            <a href="mailto:g-wics@njit.edu" className="text-white hover:text-violet-300 transition-colors duration-300 transform hover:scale-110">
              <EmailIcon className="h-10 w-10" />
            </a>
          </div>
      </div>
    </section>
  );
};

export default HomePage;