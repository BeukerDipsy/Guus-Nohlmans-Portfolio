"use client";
import { useState, useEffect } from "react";


export default function NavFooter({ sectionIds }: { sectionIds: string[] }) {
  const sections = sectionIds;
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center"});
    }
  };

  useEffect(() => {
    if (!sectionIds.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.6 }
    );

    sectionIds.forEach(sectionId => {
      const sec = document.getElementById(sectionId);
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <nav className="backdrop-blur-xs shadow-xl border rounded-4xl items-center fixed bottom-10 left-1/2 transform -translate-x-1/2 z-10 bg-secondaryGreen/40 backdrop-secondaryGreen">
      <ul className="flex justify-center space-x-7 p-4 text-6xl md:text-xl">
        {sectionIds.map(section => (
          <li key={section}>
            <button
              className={`transition-transform cursor-pointer ${activeSection === section
                  ? "text-secondaryYellow underline scale-110"
                  : "hover:underline hover:text-secondaryYellow hover:scale-110"
                }`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
