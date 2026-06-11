import Image from "next/image";
import ViewDetailsButton from "./viewDetailsButton";
import { useRouter } from "next/navigation";

export default function ProjectCard({ title, description, imagePath, tag }: { title: string; description: string; imagePath: string; tag?: string }) {
  const router = useRouter();
  return (
    <div className="relative shrink-0 bg-primaryYellow rounded-2xl w-[90vw] max-w-[70vw] aspect-[108/126] md:w-[28vw] md:max-w-[27rem] lg:w-[26vw] lg:max-w-[30rem] flex flex-col p-5 md:p-6 shadow-[0.8rem_0.8rem_0_rgba(0,0,0,0.18)] hover:scale-105 hover:shadow-[1.8rem_1.8rem_0_rgba(0,0,0,0.18)] transition cursor-pointer"
    onClick={() => router.push(`/${title.toLowerCase()}`)}
    >
      <Image src={imagePath} alt={title} width={800} height={450} className="rounded-xl w-full h-auto" />
      <div className="flex flex-col mt-3 space-y-1 flex-1">
        <h3 className="text-[4.4rem] md:text-[2.25rem] font-extrabold text-secondaryGreen">{title}</h3>
        {tag && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white px-4 py-2 rounded-full text-[2rem] md:text-[1.4rem] font-bold transform rotate-6 shadow-md">
            {tag}
          </span>
        )}
        <p className="text-[2.1rem] md:text-[1.25rem] text-secondaryGreen leading-[2.4rem] md:leading-[1.95rem] line-clamp-5">{description}</p>
      </div>
      <ViewDetailsButton path={title} />
    </div>
  )
}