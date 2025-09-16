
import React from 'react';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';
import EmailIcon from './icons/EmailIcon';

const ContactPage: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-500 mb-4">Connect With Us</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Stay in the loop! Follow us on our social channels and feel free to reach out with any questions. We're always happy to connect.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
              <a 
                href="https://www.linkedin.com/in/gwics-njit/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center text-slate-600 hover:text-violet-500 transition-all duration-300 transform hover:scale-105 group"
              >
                <LinkedInIcon className="h-16 w-16 mb-2" />
                <span className="font-semibold text-lg group-hover:underline">LinkedIn</span>
                <p className="text-sm text-slate-500">Professional Networking</p>
              </a>

              <a 
                href="https://www.instagram.com/gwicsnjit/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center text-slate-600 hover:text-violet-500 transition-all duration-300 transform hover:scale-105 group"
              >
                <InstagramIcon className="h-16 w-16 mb-2" />
                <span className="font-semibold text-lg group-hover:underline">Instagram</span>
                <p className="text-sm text-slate-500">Updates & Event Photos</p>
              </a>
              
              <a 
                href="mailto:g-wics@njit.edu" 
                className="flex flex-col items-center text-slate-600 hover:text-violet-500 transition-all duration-300 transform hover:scale-105 group"
              >
                <EmailIcon className="h-16 w-16 mb-2" />
                <span className="font-semibold text-lg group-hover:underline">Email</span>
                <p className="text-sm text-slate-500">g-wics@njit.edu</p>
              </a>
            </div>
        </div>

        <div className="text-center mt-20 bg-violet-50 p-10 rounded-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Want to Join Us?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Become a part of our growing community! Membership is open to all NJIT graduate students interested in computing.
          </p>
          <a
            href="https://www.linkedin.com/in/gwics-njit/" // Placeholder link, could be a form
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            Get Involved
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactPage;
