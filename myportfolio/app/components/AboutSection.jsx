"use client";
import React, { useState } from "react";

const TabButton = ({ active, selectTab, children }) => {
  // Dynamic styling based on 'active' state
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE] hover:text-white";

  return (
    <button onClick={selectTab} aria-selected={active}>
      <p
        className={`mr-4 font-semibold hover:text-white ${buttonClasses} pb-2 transition duration-200`}
      >
        {children}
      </p>
    </button>
  );
};
// ----------------------------------------------------------------------------------

// --- NEW Helper Component: SkillTag (For the pill/tag look) ---
// Uses props to allow different colors for key technologies
const SkillTag = ({
  children,
  colorClass = "bg-gray-700 hover:bg-gray-600",
}) => (
  <span
    className={`inline-block px-3 py-1 text-sm font-medium rounded-full text-white transition duration-200 ${colorClass} shadow-md`}
  >
    {children}
  </span>
);

// --- NEW Helper Component: SkillCategoryCard (For the main container of each category) ---
const SkillCategoryCard = ({ title, children }) => (
  <div className="bg-gray-900 p-6 rounded-xl shadow-2xl border border-gray-700 flex flex-col">
    <h3 className="font-bold text-xl mb-4 text-purple-400 border-b border-gray-700 pb-2">
      {title}
    </h3>
    <div className="flex flex-wrap gap-3">{children}</div>
  </div>
);
// ----------------------------------------------------------------------------------

// Updated TAB_DATA structure
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      // Responsive grid for skill categories: 1-3 columns depending on screen size
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Backend Skills (Prioritizing Python/FastAPI) */}
        <SkillCategoryCard title="Backend">
          <SkillTag colorClass="bg-green-600 hover:bg-green-500">
            Python
          </SkillTag>
          <SkillTag colorClass="bg-cyan-600 hover:bg-cyan-500">
            FastAPI
          </SkillTag>
          <SkillTag>RESTful APIs</SkillTag>
          <SkillTag>JWT</SkillTag>
          <SkillTag>Node.js</SkillTag>
        </SkillCategoryCard>

        {/* 2. Frontend Skills */}
        <SkillCategoryCard title="Frontend">
          <SkillTag colorClass="bg-blue-600 hover:bg-blue-500">React</SkillTag>
          <SkillTag colorClass="bg-gray-700 hover:bg-gray-600">
            Next.js
          </SkillTag>
          <SkillTag colorClass="bg-sky-500 hover:bg-sky-400">
            Tailwind CSS
          </SkillTag>
          <SkillTag>JavaScript (ES6+)</SkillTag>
          <SkillTag>HTML & CSS</SkillTag>
        </SkillCategoryCard>

        {/* 3. Database & ORM */}
        <SkillCategoryCard title="Database & ORM">
          <SkillTag colorClass="bg-green-700 hover:bg-green-600">
            MongoDB
          </SkillTag>
          <SkillTag>SQLite</SkillTag>
          <SkillTag>SQL</SkillTag>
        </SkillCategoryCard>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      // Single column list with better padding and font size for clarity
      <div className="p-6 rounded-xl bg-gray-800 shadow-xl">
        <ul className="text-base list-disc list-inside space-y-2">
          <li>
            Master’s Student in Applied Computer Science at Hochschule
            Schmalkalden (Germany)
          </li>
          <li>Bachelor of Engineering (Computer Engineering)</li>
          <li>H.S.C. in Science Stream</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Projects",
    id: "projects",
    content: (
      // Responsive card layout: 1 column on mobile, 2 columns on medium, 3 on large
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card 1: Finstagram */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transition hover:shadow-purple-500/50 hover:scale-[1.02] duration-300">
          <h3 className="font-bold text-xl mb-3 text-purple-400">
            Finstagram (Backend)
          </h3>
          <p className="text-sm text-[#ADB7BE]">
            A Python backend replicating core Instagram features: JWT-based
            authentication, post uploads, and social interactions (like,
            comment, follow/unfollow). Built with FastAPI and MongoDB for high
            performance.
          </p>
        </div>

        {/* Project Card 2: Job Portal */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transition hover:shadow-pink-500/50 hover:scale-[1.02] duration-300">
          <h3 className="font-bold text-xl mb-3 text-pink-400">
            Job Portal (Full Stack)
          </h3>
          <p className="text-sm text-[#ADB7BE]">
            Developed a team-based Job Portal using C#/.NET Core and SQL.
            Features include role-based authentication, dynamic CRUD operations,
            and an MVC architecture with a fully responsive interface.
          </p>
        </div>

        {/* Project Card 3: Registration System */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transition hover:shadow-blue-500/50 hover:scale-[1.02] duration-300">
          <h3 className="font-bold text-xl mb-3 text-blue-400">
            Registration System (MERN Stack)
          </h3>
          <p className="text-sm text-[#ADB7BE]">
            A full-stack system using React for the frontend, Node.js for the
            API, and MongoDB for persistent storage. Optimized for performance
            and scalability in user registration flows.
          </p>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  // Removed useTransition as it's not strictly necessary here and complicates the code.

  const handleTabChange = (id) => {
    setTab(id);
  };

  // Placeholder image URL to replace Next.js Image source
  const imageUrl = "/image/about-image.png";

  return (
    <section className="text-white" id="about">
      {" "}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start py-12 px-4 max-w-7xl mx-auto">
        {/* Left Column: Image (Wrapped in a div for better styling/containment) */}{" "}
        <div className="rounded-xl overflow-hidden shadow-2xl w-full max-w-md mx-auto lg:max-w-none">
          {/* Using standard <img> with responsive classes */}{" "}
          <img
            src={imageUrl}
            alt="profile image placeholder"
            className="w-full h-auto object-cover"
            width={500}
            height={500}
          />
        </div>
        {/* Right Column: Content */}{" "}
        <div className="mt-8 lg:mt-0 text-left flex flex-col h-full">
          {" "}
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE] leading-relaxed mb-6">
            I’m a motivated Full-Stack Developer specializing in Python and
            Artificial Intelligence. I enjoy creating innovative, scalable web
            applications using FastAPI, React, Next.js, SQL, and MongoDB. As a
            team-oriented learner, I’m always exploring new technologies and
            improving my expertise in modern web and AI development. I combine a
            strong academic background with practical experience to build robust
            and efficient solutions.{" "}
          </p>
          {/* Tab Buttons */}{" "}
          <div className="flex flex-row justify-start space-x-4 border-b border-gray-700 pb-2">
            {" "}
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills{" "}
            </TabButton>{" "}
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education{" "}
            </TabButton>{" "}
            <TabButton
              selectTab={() => handleTabChange("projects")}
              active={tab === "projects"}
            >
              Projects{" "}
            </TabButton>{" "}
          </div>
          {/* Tab Content */}{" "}
          <div className="mt-6">
            {/* Find and display content based on active tab */}
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
