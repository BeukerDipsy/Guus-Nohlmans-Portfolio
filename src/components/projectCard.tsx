import Image from "next/image";

export default function ProjectCard({ title, description, imagePath }: { title: string; description: string; imagePath: string }) {
  return (
    <div className="bg-primaryYellow rounded-2xl w-[27rem] h-[31.5rem] flex flex-col p-[1rem]">
      <Image src={imagePath} alt={title} width={500} height={300} className="rounded-xl" />
      <h3 className="text-xl font-bold text-secondaryGreen">{title}</h3>
      <p className="text-sm text-secondaryGreen">{description}</p>
    </div>
  )
}