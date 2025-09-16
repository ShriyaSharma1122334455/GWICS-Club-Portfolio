import React from "react";
import GwicsLogo from "./icons/GwicsLogo";

const AboutPage: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-500 mb-4">
            About GWiCS
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We are a community dedicated to supporting and promoting graduate
            women in computing at NJIT.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Section */}
          <div className="prose lg:prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-bold text-slate-800">
              Our Mission & Vision
            </h2>
            <p>
              The Graduate Women in Computing Society (GWiCS) at NJIT is
              committed to fostering a vibrant and inclusive community that
              supports and empowers women in the field of computing. Our mission
              is to promote{" "}
              <strong className="text-violet-500">academic excellence</strong>,{" "}
              <strong className="text-violet-500">professional growth</strong>,
              and <strong className="text-violet-500">gender equity</strong>{" "}
              through a variety of initiatives, including mentorship programs,
              technical workshops, networking events, and advocacy efforts.
            </p>
            <p>
              We envision a future where women are fully represented and
              thriving at all levels of the computing industry, driving
              innovation and shaping the future of technology.
            </p>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center items-center">
            <GwicsLogo className="max-w-full max-h-64 md:max-h-80 lg:max-h-96 object-contain" />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Our Goals
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center mb-0">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-violet-500 mb-2">
                Academic & Professional Empowerment
              </h3>
              <p className="text-slate-600 justify-between">
                We provide opportunities, workshops, and mentorship programs to
                help our members excel academically and prepare for successful
                careers in tech.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-violet-500 mb-2">
                Community & Mentorship
              </h3>
              <p className="text-slate-600">
                We focus on creating a supportive and welcoming network where
                members can build lasting connections, find mentors, and
                collaborate with peers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-violet-500 mb-2">
                Advocacy & Visibility
              </h3>
              <p className="text-slate-600">
                We actively promote the achievements of women in tech through
                guest talks, networking with industry leaders, and fostering
                strong industry collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
