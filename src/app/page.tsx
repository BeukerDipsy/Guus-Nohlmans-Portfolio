"use client";
import { useEffect, useRef, useState } from "react";
import GuusNohlmans from "@/components/customName/guusNohlmans";
import NavFooter from "@/components/navFooter";
import DipsyFace from "@/components/dipsyFace";
import ContactBox from "@/components/ContactBox/contactBox";
import ProjectCard from "@/components/projectCard";
import Education from "@/components/Skills/education";
import Skills from "@/components/Skills/skills";

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
          className="overflow-hidden flex items-start pb-[10vh] md:mx-0 mx-10"
        >
          <div className="flex flex-col md:flex-row md:justify-between h-full font-bold w-full px-4">
            <div className="flex flex-col flex-wrap pr-0 md:pr-10 lg:pr-20 ">
              <h1 className="text-[10rem] md:text-[8rem] lg:text-[6rem] [text-shadow:0.67rem_0.67rem_0rem_rgb(0_0_0_/0.18)] md:[text-shadow:0.53rem_0.53rem_0rem_rgb(0_0_0_/0.18)] lg:[text-shadow:0.4rem_0.4rem_0rem_rgb(0_0_0_/0.18)] text-secondaryYellow font-bold text-left">About me</h1>
              <p className="text-[3rem] md:text-[2.35rem] lg:text-[1.7rem] pt-8 md:pt-16 md:pr-0 font-medium"> I&apos;m Guus, a student at Fontys University of Applied Sciences with a strong passion for development and technology. 
                <br/> <br/>
                I love bringing ideas to life through code and finding unique approaches to tackle problems. 
                <br className="py-1" />
                I enjoy working with others and can easily lose track of time when working on a project I am passionate about. In my free time, I go to my local scouting, spend time with friends and work on personal projects. </p>
            </div>
            <DipsyFace className="absolute pl-25 pt-55 md:pl-100 md:pt-40 lg:pl-0 lg:static opacity-20 lg:opacity-100 lg:pt-17 self-center md:self-auto scale-170 md:scale-150 lg:scale-90 xl:scale-95 2xl:scale-100" />
          </div>
        </section>

        {/** Skills / Experience section **/}
        <section
          id="skills"
          ref={(el) => { sectionRefs.current[2] = el; }}
          style={{
            marginTop: `${margins[2] || 0}px`,
            marginBottom: `${margins[2] || 0}px`,
          }}
          className="pb-[10vh] md:mx-0 mx-10"
        >
          <div className="flex flex-col justify-center mx-auto w-full px-4">
            <h1 className="text-[10rem] md:text-[8rem] lg:text-[6rem] [text-shadow:0.67rem_0.67rem_0rem_rgb(0_0_0_/0.18)] md:[text-shadow:0.53rem_0.53rem_0rem_rgb(0_0_0_/0.18)] lg:[text-shadow:0.4rem_0.4rem_0rem_rgb(0_0_0_/0.18)] text-secondaryYellow font-bold text-left">Experience</h1>
            <div className="flex-col md:flex-row flex w-full mt-2 gap-10 space-y-15">
              <Education/>
              <Skills/>
            </div>
          </div>
        </section>

        {/** Projects section **/}
        <section
          id="projects"
          ref={(el) => { sectionRefs.current[3] = el; }}
          style={{
            marginTop: `${margins[3] || 0}px`,
            marginBottom: `${margins[3] || 0}px`,
          }}
          className="pb-[10vh] md:mx-0 mx-10"
        >
          <div className="flex flex-col justify-center mx-auto w-full px-4">
            <h1 className="text-[10rem] md:text-[8rem] lg:text-[6rem] [text-shadow:0.67rem_0.67rem_0rem_rgb(0_0_0_/0.18)] md:[text-shadow:0.53rem_0.53rem_0rem_rgb(0_0_0_/0.18)] lg:[text-shadow:0.4rem_0.4rem_0rem_rgb(0_0_0_/0.18)] text-secondaryYellow font-bold text-left mb-4">Projects</h1>
            <div className="flex flex-row w-full justify-between space-x-6">
              <ProjectCard title="Sabroso" description="Developing a smart restaurant ordering system. Orders are instantly sent to the kitchen or bar, streamlining the workflow and improving the overall dining experience." imagePath="/images/Sabroso.png" />
              {/* <ProjectCard title="Actipulse" description="Developing an application/device to improve productivity and health by tracking sitting-habits." imagePath="/images/Actipulse.png" /> */}
              <ProjectCard title="Projectmap" description="A dashboard for visualizing and managing projects, specialized for the construction industry." imagePath="/images/Projectmap.png" tag="New!" />
              <ProjectCard title="WiebelToren" description="Designing and developing a game for the less-abled community, played with the Pillo from Hulan." imagePath="/images/WiebelToren.png" />
            </div>
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
          className=" pb-[5vh] md:pb-[17vh] md:mx-0 mx-10"
        >
          <div className="flex flex-col justify-center w-full mx-auto">
            <h1 className=" md:mb-0 mb-8 text-[10rem] md:text-[8rem] lg:text-[6rem] [text-shadow:0.67rem_0.67rem_0rem_rgb(0_0_0_/0.18)] md:[text-shadow:0.53rem_0.53rem_0rem_rgb(0_0_0_/0.18)] lg:[text-shadow:0.4rem_0.4rem_0rem_rgb(0_0_0_/0.18)] text-secondaryYellow font-bold text-left">Contact me</h1>
            <ContactBox />
          </div>
        </section>
      </main>

      <NavFooter sectionIds={sectionIds} />
    </>
  );
}
