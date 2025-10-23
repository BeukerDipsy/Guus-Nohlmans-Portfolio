import GuusNohlmans from "@/components/customName/guusNohlmans";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen max-w-[1440px] w-full mx-auto">
      <GuusNohlmans />
      <h2 className="text-4xl -mt-6 text-secondaryYellow">turning creative ideas into creative applications</h2>
    </div>
    </>
  );
}