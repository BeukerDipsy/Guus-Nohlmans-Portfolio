import Image from "next/image";
import ViewDetailsButton from "./viewDetailsButton";
import { useRouter } from "next/navigation";

export default function ProjectCard({ title, description, imagePath }: { title: string; description: string; imagePath: string }) {
  const router = useRouter();
  return (
    <div className="bg-primaryYellow rounded-2xl w-108 h-126 flex flex-col p-4 shadow-[0.8rem_0.8rem_0_rgba(0,0,0,0.18)] hover:scale-105 hover:shadow-[1.8rem_1.8rem_0_rgba(0,0,0,0.18)] transition cursor-pointer"
    onClick={() => router.push(`/${title.toLowerCase()}`)}
    >
      <Image src={imagePath} alt={title} width={500} height={300} className="rounded-xl hover" />
      <div className="flex flex-col mt-4 space-y-2">
        <h3 className="text-[1.7rem] font-extrabold text-secondaryGreen">{title}</h3>
        <p className="text-[1.1rem] text-secondaryGreen leading-[1.7rem] line-clamp-5">{description}</p>
      </div>
      <ViewDetailsButton path={title} />
    </div>
  )
}