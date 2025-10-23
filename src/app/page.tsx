"use client"
import GuusNohlmans from "@/components/customName/guusNohlmans";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
    {/** Hero section **/}
      <section id="hero"> 
        <div className="flex flex-col items-center justify-center min-h-screen max-w-[1440px] w-full mx-auto">
          <GuusNohlmans onClick={() => scrollToSection("aboutMe")} />
          <h2 className="text-4xl -mt-6 text-secondaryYellow">turning creative ideas into creative applications</h2>
        </div>
      </section>

      {/** About Me section **/}
      <section id="aboutMe"> 
        <div className="flex flex-col items-center justify-center min-h-screen max-w-[1440px] w-full mx-auto">
          <h2 className="text-[2.25rem] text-secondaryYellow">About Me</h2>
        </div>
      </section>

      {/** Skills section **/}
      <section id="skills"> 
        <div className="flex flex-col items-center justify-center min-h-screen max-w-[1440px] w-full mx-auto">
          <h2 className="text-[2.25rem] text-secondaryYellow">Skills</h2>
        </div>
      </section>

      {/** Projects section **/}
      <section id="projects"> 
        <div className="flex flex-col items-center justify-center min-h-screen max-w-[1440px] w-full mx-auto">
          <h2 className="text-[2.25rem] text-secondaryYellow">Projects</h2>
        </div>
      </section>

      {/** Contact section **/}
      <section id="contact"> 
        <div className="flex flex-col items-center justify-center min-h-screen max-w-[1440px] w-full mx-auto">
          <h2 className="text-[2.25rem] text-secondaryYellow">Contact</h2>
        </div>
      </section>
    </>
  );
}