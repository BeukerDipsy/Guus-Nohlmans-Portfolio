"use client";
import GuusNohlmans from "@/components/customName/guusNohlmans";
import NavFooter from "@/components/navFooter";
import DipsyFace from "@/components/dipsyFace";
import ContactBox from "@/components/ContactBox/contactBox";
import { useEffect, useState } from "react";
import ProjectCard from "@/components/projectCard";

export default function Home() {
  const [sectionIds, setSectionIds] = useState<string[]>([]);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };



  useEffect(() => {
    const ids = Array.from(
      document.getElementsByTagName("section")
    ).map(sec => sec.id);

    setSectionIds(ids);
  }, []);

  return (
    <>
      <main className="max-w-[1440px] mx-auto w-full space-y-[50vh]">


        {/** Hero section **/}
        <section id="home" className="pt-[40vh]">
          <div className="flex flex-col items-center justify-center w-full px-4">
            <GuusNohlmans onClick={() => scrollToSection("about")} />
            <h2 className="text-4xl -mt-6 text-secondaryYellow text-center cursor-pointer hover:underline transition z-0" onClick={() => scrollToSection("projects")}>
              Turning creative ideas into creative applications.
            </h2>
          </div>
        </section>

        {/** About Me section **/}
        <section
          id="about"
          className="overflow-hidden flex items-start"
        >
          <div className="flex flex-col md:flex-row md:justify-between h-full font-bold w-full px-4">
            <div className="flex flex-col flex-wrap pr-0 md:pr-10 lg:pr-20 ">
              <h1 className="text-[4rem] md:text-[6rem] [text-shadow:0px_5px_2px_rgb(0_0_0/0.18)] text-left">
                About me
              </h1>
              <p className="text-[1.5rem] md:text-[1.7rem] pt-8 md:pt-16 md:pr-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis augue eu blandit accumsan. Quisque imperdiet nisi justo. Donec metus augue, tristique eget auctor eu, mattis ac arcu. Mauris consectetur turpis et risus rhoncus tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet nisi justo. </p>
            </div>

            <DipsyFace className="pt-10 md:pt-17 self-center md:self-auto scale-70 xs:scale-75 sm:scale-80 md:scale-85 lg:scale-90 xl:scale-95 2xl:scale-100" />
          </div>
        </section>


        {/** Skills section **/}
        <section id="skills">
          <div className="flex flex-col items-center justify-center mx-auto w-full px-4">
            <h2 className="text-[1.75rem] md:text-[2.25rem] text-secondaryYellow text-center">Skills</h2>
          </div>
        </section>

        {/** Projects section **/}
        <section id="projects">
          <div className="flex flex-col items-center justify-center mx-auto w-full px-4">
            <h2 className="text-[1.75rem] md:text-[2.25rem] text-secondaryYellow text-center">Projects</h2>
            <div className="flex flex-row w-full justify-between">
              <ProjectCard title="Project 1" description="Description for project 1" imagePath="/images/Sabroso.svg" />
              <ProjectCard title="Project 3" description="Description for project 3" imagePath="/images/Actipulse.svg" />
              <ProjectCard title="Project 2" description="Description for project 2" imagePath="/images/WiebelToren.svg" />
            </div>
          </div>
        </section>

        {/** Contact section **/}
        <section id="contact" className="pb-[20vh] ">
          <div className="flex flex-col justify-center w-full mx-auto px-4">
            <h1 className="text-[4rem] md:text-[6rem] [text-shadow:0px_5px_2px_rgb(0_0_0_/0.18)] text-secondaryYellow font-bold text-left ">Contact me</h1>
            <ContactBox />
          </div>
        </section>
      </main>
      <NavFooter sectionIds={sectionIds} />
    </>
  );
}
