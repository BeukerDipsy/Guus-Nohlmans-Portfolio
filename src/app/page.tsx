"use client";
import { useEffect, useRef, useState } from "react";
import GuusNohlmans from "@/components/customName/guusNohlmans";
import NavFooter from "@/components/navFooter";
import DipsyFace from "@/components/dipsyFace";
import ContactBox from "@/components/ContactBox/contactBox";
import ProjectCard from "@/components/projectCard";

export default function Home() {
  const sectionIds = ["home", "about", "skills", "projects", "contact"];
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [margins, setMargins] = useState<number[]>([]);

  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const calculateMargins = () => {
      const newMargins = sectionRefs.current.map((sec) => {
        if (!sec) return 0;
        const remainingPx = window.innerHeight - sec.offsetHeight;
        console.log("Remaining px for section:", sec.id, remainingPx);
        return remainingPx > 0 ? remainingPx / 2 : 0;
      });
      setMargins(newMargins);
    };

    calculateMargins();
    window.addEventListener("resize", calculateMargins);
    return () => window.removeEventListener("resize", calculateMargins);
  }, []);

  return (
    <>
      <main className="max-w-[1440px] mx-auto w-full">
        {/** Hero section **/}
        <section
          id="home"
          ref={(el) => { sectionRefs.current[0] = el; }}
          style={{
            marginTop: `${margins[0] || 0}px`,
            marginBottom: `${margins[0] || 0}px`,
          }}
          className="flex flex-col items-center justify-center"
        >
          <div className="w-full px-4 flex flex-col items-center justify-center">
            <GuusNohlmans onClick={() => scrollToSection(1)} />
            <h2
              className="text-4xl -mt-6 text-secondaryYellow text-center cursor-pointer hover:underline transition z-0"
              onClick={() => scrollToSection(3)}
            >
              Turning creative ideas into creative applications.
            </h2>
          </div>
        </section>

        {/** About Me section **/}
        <section
          id="about"
          ref={(el) => { sectionRefs.current[1] = el; }}
          style={{
            marginTop: `${margins[1] || 0}px`,
            marginBottom: `${margins[1] || 0}px`,
          }}
          className="overflow-hidden flex items-start"
        >
          <div className="flex flex-col md:flex-row md:justify-between h-full font-bold w-full px-4">
            <div className="flex flex-col flex-wrap pr-0 md:pr-10 lg:pr-20 ">
              <h1 className="text-[4rem] md:text-[6rem] [text-shadow:0px_5px_2px_rgb(0_0_0/0.18)] text-left">
                About me
              </h1>
              <p className="text-[1.5rem] md:text-[1.7rem] pt-8 md:pt-16 md:pr-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis augue eu blandit accumsan. Quisque imperdiet nisi justo. Donec metus augue, tristique eget auctor eu, mattis ac arcu. Mauris consectetur turpis et risus rhoncus tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet nisi justo.
              </p>
            </div>

            <DipsyFace className="pt-10 md:pt-17 self-center md:self-auto scale-70 xs:scale-75 sm:scale-80 md:scale-85 lg:scale-90 xl:scale-95 2xl:scale-100" />
          </div>
        </section>

        {/** Skills section **/}
        <section
          id="skills"
          ref={(el) => { sectionRefs.current[2] = el; }}
          style={{
            marginTop: `${margins[2] || 0}px`,
            marginBottom: `${margins[2] || 0}px`,
          }}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-[1.75rem] md:text-[2.25rem] text-secondaryYellow text-center">Skills</h2>
        </section>

        {/** Projects section **/}
        <section
          id="projects"
          ref={(el) => { sectionRefs.current[3] = el; }}
          style={{
            marginTop: `${margins[3] || 0}px`,
            marginBottom: `${margins[3] || 0}px`,
          }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-[4rem] md:text-[6rem] [text-shadow:0px_5px_2px_rgb(0_0_0_/0.18)] text-secondaryYellow font-bold text-left mb-[1rem]">
            Projects
          </h1>
          <div className="flex flex-row w-full justify-between space-x-[1.5rem]">
            <ProjectCard
              title="Sabroso"
              description="Developing a smart restaurant ordering system. Orders are instantly sent to the kitchen or bar, streamlining the workflow and improving the overall dining experience."
              imagePath="/images/Sabroso.svg"
            />
            <ProjectCard
              title="Actipulse"
              description="Developing a product with a connected application which increases productivity and health by tracking time spent sitting and providing reminders to move."
              imagePath="/images/Actipulse.svg"
            />
            <ProjectCard
              title="WiebelToren"
              description="Description for project 2"
              imagePath="/images/WiebelToren.svg"
            />
          </div>
        </section>

        <br />

        {/** Contact section **/}
        <section
          id="contact"
          ref={(el) => { sectionRefs.current[4] = el; }}
          style={{
            marginTop: `${margins[4] || 0}px`,
            marginBottom: `${margins[4] || 0}px`,
          }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-[4rem] md:text-[6rem] [text-shadow:0px_5px_2px_rgb(0_0_0_/0.18)] text-secondaryYellow font-bold text-left">
            Contact me
          </h1>
          <ContactBox />
        </section>
      </main>

      <NavFooter sectionIds={sectionIds} />
    </>
  );
}