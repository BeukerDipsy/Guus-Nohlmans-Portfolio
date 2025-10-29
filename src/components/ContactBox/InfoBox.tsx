import { JSX } from "react";


export default function InfoBox({ title, description, children}: { title: string, description: string, children?: React.ReactNode }) {
  return (
    <div className="h-full w-[90%] p-4 rounded-2xl bg-primaryYellow flex flex-row shadow-[0.6rem_0.6rem_0_rgba(0,0,0,0.18)] ">
      <div className="h-[90%] aspect-square rounded-2xl m-auto border-2 border-primaryGreen flex items-center justify-center p-4">
        {children}
      </div>
      <div className="flex flex-col items-start justify-center flex-1">
        <label className="p-4 font-semibold text-lg  text-secondaryGreen">{title}</label>
        <p className="p-4 text-lg text-[1rem] text-primaryGreen">{description}</p>
      </div>
    </div>
  );
}