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
      <main className="max-w-[1440px] mx-auto w-full space-y-[40vh]">

        {/** Hero section **/}
        <section id="home" className="pt-[37vh] pb-[10vh]">
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
          className="overflow-hidden flex items-start pb-[10vh]"
        >
          <div className="flex flex-col md:flex-row md:justify-between h-full font-bold w-full px-4">
            <div className="flex flex-col flex-wrap pr-0 md:pr-10 lg:pr-20 ">
              <h1 className="text-[4rem] md:text-[6rem] [text-shadow:0.4rem_0.4rem_0rem_rgb(0_0_0_/0.18)] text-secondaryYellow font-bold text-left">About me</h1>
              <p className="text-[1.5rem] md:text-[1.7rem] pt-8 md:pt-16 md:pr-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis augue eu blandit accumsan. Quisque imperdiet nisi justo. Donec metus augue, tristique eget auctor eu, mattis ac arcu. Mauris consectetur turpis et risus rhoncus tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet nisi justo. </p>
            </div>

            <DipsyFace className="pt-10 md:pt-17 self-center md:self-auto scale-70 xs:scale-75 sm:scale-80 md:scale-85 lg:scale-90 xl:scale-95 2xl:scale-100" />
          </div>
        </section>


        {/** Skills section **/}
        <section id="skills" className="pb-[10vh]">
          <div className="flex flex-col items-center justify-center mx-auto w-full px-4">
            <h2 className="text-[1.75rem] md:text-[2.25rem] text-secondaryYellow text-center">Skills</h2>
          </div>
        </section>

        {/** Projects section **/}
        <section id="projects" className="pb-[10vh]">
          <div className="flex flex-col justify-center mx-auto w-full px-4">
            <h1 className="text-[4rem] md:text-[6rem] [text-shadow:0.4rem_0.4rem_0rem_rgb(0_0_0_/0.18)] text-secondaryYellow font-bold text-left mb-4">Projects</h1>
            <div className="flex flex-row w-full justify-between space-x-6">
              <ProjectCard title="Sabroso" description="Developing a smart restaurant ordering system. Orders are instantly sent to the kitchen or bar, streamlining the workflow and improving the overall dining experience." imagePath="/images/Sabroso.png" />
              <ProjectCard title="Actipulse" description="Developing an application/device to improve productivity and health by tracking sitting-habits." imagePath="/images/Actipulse.png" />
              <ProjectCard title="WiebelToren" description="Designing and developing a game for the less-abled community, played with the Pillo from Hulan." imagePath="/images/WiebelToren.png" />
            </div>
          </div>
        </section>

        {/** Contact section **/}
        <section id="contact" className="pb-[17vh]">
          <div className="flex flex-col justify-center w-full mx-auto">
            <h1 className="text-[4rem] md:text-[6rem] [text-shadow:0.4rem_0.4rem_0rem_rgb(0_0_0_/0.18)] text-secondaryYellow font-bold text-left">Contact me</h1>
            <ContactBox />
          </div>
        </section>
      </main>
      <NavFooter sectionIds={sectionIds} />
    </>
  );
}
