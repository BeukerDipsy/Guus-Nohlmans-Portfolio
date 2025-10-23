"use client"
import GuusNohlmans from "@/components/customName/guusNohlmans";

export default function Home() {
  const scrollToSection = () => {
    const aboutMeSection = document.getElementById("aboutMe");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
    {/** Hero section **/}
      <section id="hero"> 
        <div className="flex flex-col items-center justify-center min-h-screen max-w-[1440px] w-full mx-auto">
          <GuusNohlmans onClick={scrollToSection} />
          <h2 className="text-4xl -mt-6 text-secondaryYellow">turning creative ideas into creative applications</h2>
        </div>
      </section>

      {/** About Me section **/}
      <section id="aboutMe"> 
        <div className="flex flex-col items-center justify-center min-h-screen max-w-[1440px] w-full mx-auto">
          <h2 className="text-[2.25rem] text-secondaryYellow">About Me</h2>
        </div>
      </section>
    </>
  );
}