"use client";
import GuusNohlmans from "@/components/customName/guusNohlmans";
import NavFooter from "@/components/navFooter";
import DipsyFace from "@/components/dipsyFace";
import ContactBox from "@/components/ContactBox/contactBox";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main className="max-w-[1440px] mx-auto w-full">
        <NavFooter />

        {/** Hero section **/}
        <section id="hero">
          <div className="flex flex-col items-center justify-center min-h-screen w-full p-4">
            <GuusNohlmans onClick={() => scrollToSection("aboutMe")} />
            <h2 className="text-4xl -mt-6 text-secondaryYellow text-center cursor-pointer hover:underline transition z-0" onClick={() => scrollToSection("projects")}>
              Turning creative ideas into creative applications.
            </h2>
          </div>
        </section>

        {/** About Me section **/}
        <section id="aboutMe" className="py-8 md:py-16">
          <div className="flex flex-col md:flex-row md:justify-between min-h-screen font-bold w-full p-4">
            <div className="flex flex-col flex-wrap pr-0 md:pr-10 lg:pr-20 ">
              <h1 className="text-[4rem] md:text-[6rem] [text-shadow:_0px_5px_2px_rgb(0_0_0_/_0.18)] text-left">
                About me
              </h1>
              <p className="text-[1.5rem] md:text-[1.7rem] pt-8 md:pt-16  md:pr-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis augue eu blandit accumsan. Quisque imperdiet nisi justo. Donec metus augue, tristique eget auctor eu, mattis ac arcu. Mauris consectetur turpis et risus rhoncus tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet nisi justo.
              </p>
            </div>
            <DipsyFace className="pt-10 md:pt-17 self-center md:self-auto scale-70 xs:scale-75 sm:scale-80 md:scale-85 lg:scale-90 xl:scale-95 2xl:scale-100" />
          </div>
        </section>

        {/** Skills section **/}
        <section id="skills">
          <div className="flex flex-col items-center justify-center min-h-screen mx-auto w-full p-4">
            <h2 className="text-[1.75rem] md:text-[2.25rem] text-secondaryYellow text-center">Skills</h2>
          </div>
        </section>

        {/** Projects section **/}
        <section id="projects">
          <div className="flex flex-col items-center justify-center min-h-screen mx-auto w-full p-4">
            <h2 className="text-[1.75rem] md:text-[2.25rem] text-secondaryYellow text-center">Projects</h2>
          </div>
        </section>

        {/** Contact section **/}
        <section id="contact">
          <div className="flex flex-col justify-center min-h-screen w-full mx-auto w-full p-4">
            <h1 className="text-[4rem] md:text-[6rem] [text-shadow:_0px_5px_2px_rgb(0_0_0_/_0.18)] text-secondaryYellow font-bold text-left ">Contact me</h1>
            <ContactBox />
          </div>
        </section>
      </main>
    </>
  );
}
