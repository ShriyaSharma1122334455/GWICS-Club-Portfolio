import React, { useState, useEffect } from "react";
import type { SectionId } from "./types";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import TeamPage from "./components/TeamPage";
import EventsPage from "./components/EventsPage";
import FloatingSocials from "./components/FloatingSocials";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    const sections: SectionId[] = ["home", "about", "team", "events"];

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Triggers when the middle of the viewport crosses the element's boundary
      threshold: 0,
    });

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-700">
      <Header activeSection={activeSection} />
      <main>
        <HomePage />
        <AboutPage />
        <TeamPage />
        <EventsPage />
      </main>
      <Footer />
      <FloatingSocials />
    </div>
  );
};

export default App;
