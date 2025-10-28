export default function ProjectCard({ title, description, imagePath }: { title: string; description: string; imagePath: string }) {
  return (
    <div className="bg-primaryYellow rounded-2xl w-[27rem] h-[27.7rem] flex flex-col justify-between p-[0.6rem]">
      <div className="bg-auto w-full h-[12.3rem] outline-3 rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${imagePath})` }}>

      </div>
      <div className="flex flex-col p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}