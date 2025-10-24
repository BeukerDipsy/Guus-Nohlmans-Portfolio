export default function NavFooter() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="backdrop-blur-xs shadow-xl border  rounded-4xl items-center fixed bottom-10 left-1/2 transform -translate-x-1/2 z-10 bg-secondaryGreen/40 backdrop-secondaryGreen">
      <ul className="flex justify-center space-x-7 p-4 text-6xl md:text-xl">
        <li>
          <button className="hover:underline hover:text-secondaryYellow hover:scale-110 transition-transform cursor-pointer" onClick={() => scrollToSection("hero")}>Home</button>
        </li>
        <li>
          <button className="hover:underline hover:text-secondaryYellow hover:scale-110 transition-transform cursor-pointer" onClick={() => scrollToSection("aboutMe")}>About</button>
        </li>
        <li>
          <button className="hover:underline hover:text-secondaryYellow hover:scale-110 transition-transform cursor-pointer" onClick={() => scrollToSection("skills")}>Skills</button>
        </li>
        <li>
          <button className="hover:underline hover:text-secondaryYellow hover:scale-110 transition-transform cursor-pointer" onClick={() => scrollToSection("projects")}>Projects</button>
        </li>
        <li>
          <button className="hover:underline hover:text-secondaryYellow hover:scale-110 transition-transform cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}