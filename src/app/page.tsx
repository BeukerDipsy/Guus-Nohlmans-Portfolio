"use client"
import GuusNohlmans from "@/components/customName/guusNohlmans";
import NavFooter from "@/components/navFooter";
import DipsyFace from "@/components/dipsyFace";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main className="max-w-[1440px] mx-auto w-full ">
        <NavFooter />

        {/** Hero section **/}
        <section id="hero">
          <div className="flex flex-col items-center justify-center min-h-screen ">
            <GuusNohlmans onClick={() => scrollToSection("aboutMe")} />
            <h2 className="text-4xl -mt-6 text-secondaryYellow">turning creative ideas into creative applications</h2>
          </div>
        </section>

        {/** About Me section **/}
        <section id="aboutMe">
          <div className="flex flex-row justify-between min-h-screen py-30 font-bold">
            <div className="flex flex-col">
              <h1 className="text-[6rem] [text-shadow:_0px_5px_2px_rgb(0_0_0_/_0.18)]">About me</h1>
              <p className="text-[1.7rem] pt-50 pr-[100px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis augue eu blandit accumsan. Quisque imperdiet nisi justo. Donec metus augue, tristique eget auctor eu, mattis ac arcu. Mauris consectetur turpis et risus rhoncus tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet nisi justo.
              </p>
              
            </div>
            <DipsyFace className="pt-20" />
          </div>
        </section>

        {/** Skills section **/}
        <section id="skills">
          <div className="flex flex-col items-center justify-center min-h-screen ">
            <h2 className="text-[2.25rem] text-secondaryYellow">Skills</h2>
          </div>
        </section>

        {/** Projects section **/}
        <section id="projects">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-[2.25rem] text-secondaryYellow">Projects</h2>
          </div>
        </section>

        {/** Contact section **/}
        <section id="contact">
          <div className="flex flex-col items-center justify-center min-h-screen w-full mx-auto">
            <h2 className="text-[2.25rem] text-secondaryYellow">Contact</h2>
          </div>
        </section>
      </main>

    </>
  );
}