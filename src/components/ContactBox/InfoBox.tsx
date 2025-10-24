import { JSX } from "react";


export default function InfoBox({ title, description, svg }: { title: string, description: string, svg?: JSX.Element }) {
  return (
    <div className=" w-full h-full w-[90%] p-4 rounded-2xl border border-secondaryYellow flex flex-row ">
      <div className="h-full w-[29%] rounded-2xl border border-secondaryYellow flex items-center justify-center">
        {svg ? svg : <i className="fas fa-envelope text-secondaryYellow text-4xl"></i>}
      </div>
      <div className="flex flex-col items-start justify-center flex-1">
        <label className="p-4 font-semibold text-lg">{title}</label>
        <p className="p-4 text-lg text-[1rem]">{description}</p>
      </div>
    </div>
  );
}