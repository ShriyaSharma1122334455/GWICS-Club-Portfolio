import React, { useRef } from 'react';
import { TEAM_MEMBERS } from '../constants';
import type { TeamMember } from '../types';
import LinkedInIcon from './icons/LinkedInIcon';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
    <img className="w-full h-64 object-cover object-center flex-shrink-0" src={member.imageUrl} alt={member.name} />
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
        <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-violet-500 hover:text-violet-600 transition-colors">
            <LinkedInIcon className="h-6 w-6" />
        </a>
      </div>
      <p className="text-violet-500 font-semibold">{member.title}</p>
      <p className="text-slate-600 text-sm mb-4">{member.degree}</p>
      <blockquote className="border-l-4 border-stone-200 pl-4 text-slate-500 italic mt-auto">
        {member.quote}
      </blockquote>
    </div>
  </div>
);


const TeamPage: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.9;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-violet-500 mb-4">Meet the Team</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            The passionate leaders and advisors dedicated to empowering our community.
          </p>
        </div>
        <div className="relative">
            <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-8 pb-8 -mx-6 px-6 no-scrollbar" style={{scrollSnapType: 'x mandatory'}}>
                {TEAM_MEMBERS.map((member, index) => (
                    <div key={index} className="w-[90vw] sm:w-80 md:w-96 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
                        <TeamMemberCard member={member} />
                    </div>
                ))}
            </div>

             {/* Controls */}
            <button
                onClick={() => scroll('left')}
                className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-500 rounded-full p-2 shadow-lg z-10 hidden md:flex items-center justify-center transition-all"
                aria-label="Scroll left"
            >
                <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
                onClick={() => scroll('right')}
                className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-500 rounded-full p-2 shadow-lg z-10 hidden md:flex items-center justify-center transition-all"
                aria-label="Scroll right"
            >
                <ChevronRightIcon className="h-6 w-6" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;