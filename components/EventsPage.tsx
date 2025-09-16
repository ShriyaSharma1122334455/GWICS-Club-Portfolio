import React, { useRef } from 'react';
import { UPCOMING_EVENTS, PAST_EVENTS } from '../constants';
import type { Event } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
        <img className="w-full h-48 object-cover flex-shrink-0" src={event.imageUrl} alt={event.title} />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
            <p className="text-slate-600 flex-grow">{event.description}</p>
        </div>
    </div>
);

const PastEventCard: React.FC<{ event: Event }> = ({ event }) => (
    <div className="relative rounded-lg shadow-lg overflow-hidden group h-64">
        <img className="w-full h-full object-cover" src={event.imageUrl} alt={event.title} />
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
            <p className="text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-full">
                {event.description}
            </p>
        </div>
    </div>
);

const EventsPage: React.FC = () => {
    const upcomingEventsRef = useRef<HTMLDivElement>(null);
    const pastEventsRef = useRef<HTMLDivElement>(null);

    const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
        if (ref.current) {
            const scrollAmount = ref.current.clientWidth * 0.9;
            ref.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section id="events" className="py-16 md:py-24 bg-stone-50">
            <div className="container mx-auto px-6">
                {/* Upcoming Events */}
                <section className="mb-24">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-violet-500 mb-4">Upcoming Events</h1>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Join us for our next workshop, talk, or social gathering.
                        </p>
                    </div>
                    <div className="relative">
                        <div ref={upcomingEventsRef} className="flex overflow-x-auto space-x-8 pb-8 -mx-6 px-6 no-scrollbar" style={{scrollSnapType: 'x mandatory'}}>
                            {UPCOMING_EVENTS.map((event, index) => (
                                <div key={index} className="w-[90vw] sm:w-80 md:w-96 flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
                                    <EventCard event={event} />
                                </div>
                            ))}
                        </div>
                        <button onClick={() => scroll(upcomingEventsRef, 'left')} className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-500 rounded-full p-2 shadow-lg z-10 hidden md:flex items-center justify-center transition-all" aria-label="Scroll left">
                            <ChevronLeftIcon className="h-6 w-6" />
                        </button>
                        <button onClick={() => scroll(upcomingEventsRef, 'right')} className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-500 rounded-full p-2 shadow-lg z-10 hidden md:flex items-center justify-center transition-all" aria-label="Scroll right">
                            <ChevronRightIcon className="h-6 w-6" />
                        </button>
                    </div>
                </section>

                {/* Past Events */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-violet-500 mb-4">Past Events</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            A look back at some of our memorable moments and successful events.
                        </p>
                    </div>
                    <div className="relative">
                        <div ref={pastEventsRef} className="flex overflow-x-auto space-x-8 pb-8 -mx-6 px-6 no-scrollbar" style={{scrollSnapType: 'x mandatory'}}>
                            {PAST_EVENTS.map((event, index) => (
                            <div key={index} className="w-[90vw] sm:w-96 md:w-[450px] flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
                                    <PastEventCard event={event} />
                                </div>
                            ))}
                        </div>
                        <button onClick={() => scroll(pastEventsRef, 'left')} className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-500 rounded-full p-2 shadow-lg z-10 hidden md:flex items-center justify-center transition-all" aria-label="Scroll left">
                            <ChevronLeftIcon className="h-6 w-6" />
                        </button>
                        <button onClick={() => scroll(pastEventsRef, 'right')} className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-500 rounded-full p-2 shadow-lg z-10 hidden md:flex items-center justify-center transition-all" aria-label="Scroll right">
                            <ChevronRightIcon className="h-6 w-6" />
                        </button>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default EventsPage;