import { JSX } from "react";


export default function InfoBox({ title, description, children}: { title: string, description: string, children?: React.ReactNode }) {
  return (
    <div className="h-full p-4 rounded-2xl flex flex-row bg-[#78A166] inset-shadow-[0.4rem_0.4rem_0_rgba(0,0,0,0.18)]">
      <div className="h-[90%] aspect-square m-auto flex items-center justify-center p-4">
        {children}
      </div>
      <div className="flex flex-col items-start justify-center flex-1">
        <label className="p-1 font-semibold text-lg text-secondaryYellow">{title}</label>
        <p className="p-1 text-lg text- text-primaryYellow">{description}</p>
      </div>
    </div>
  );
}