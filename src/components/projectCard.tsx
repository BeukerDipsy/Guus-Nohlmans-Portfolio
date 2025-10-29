import Image from "next/image";
import ViewDetailsButton from "./viewDetailsButton";

export default function ProjectCard({ title, description, imagePath }: { title: string; description: string; imagePath: string }) {
  return (
    <div className="bg-primaryYellow rounded-2xl w-108 h-126 flex flex-col p-4 shadow-[0.8rem_0.8rem_0_rgba(0,0,0,0.18)]">
      <Image src={imagePath} alt={title} width={500} height={300} className="rounded-xl hover" />
      <div className="flex flex-col mt-4 space-y-2">
        <h3 className="text-[1.7rem] font-extrabold text-secondaryGreen">{title}</h3>
        <p className="text-[1.1rem] text-secondaryGreen leading-[1.7rem] line-clamp-5">{description}</p>
      </div>
      <ViewDetailsButton path={title} />
    </div>
  )
}