"use client";
import GuusNohlmans from "@/components/customName/guusNohlmans";

export default function Home() {

  // const scrollToSection = (sectionId: string) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen py-2 max-w-[1440px] w-full mx-auto">
      <GuusNohlmans />
      <h2 className="text-4xl mt-4 mb-8 text-secondaryYellow">Turning creative ideas into creative applications.</h2>
    </div>
    </>
  );
}