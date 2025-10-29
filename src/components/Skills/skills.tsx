export default function Skills() {
  return (
    <div className="px-8 py-6 rounded-2xl w-full bg-backgroundGreen inset-shadow-[0.5rem_0.5rem_0_rgba(0,0,0,0.18)] items-start">
      <h1 className="text-[3.5rem] [text-shadow:0.4rem_0.4rem_0rem_rgb(0_0_0_/0.18)] font-bold">Skills</h1>
      <hr className="border-2 my-1 rounded-full" />
      <div className="mt-4 flex flex-col gap-4">
        <div className="w-full">
          <h2 className="text-2xl font-semibold">Front-end</h2>
          <div className="mt-2 grid grid-cols-2 gap-4 text-[1.2rem]">
            <ul className="list-disc list-inside">
              <li>HTML</li>
              <li>CSS/Tailwind</li>
              <li>JavaScript</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>UX/UI Design</li>
              <li>React/Next.js</li>
              <li>Figma</li>
            </ul>
          </div>
          <hr className="border-1 my-2 rounded-full" />
          <h2 className="text-2xl font-semibold">Back-end</h2>
          <ul className="mt-2 list-disc list-inside text-[1.2rem]">
            <li>C#/ASP.NET Core</li>
            <li>RESTful API Development</li>
            <li>Node.js</li>
          </ul>
          <hr className="border-1 my-2 rounded-full" />
          <h2 className="text-2xl font-semibold">Data Management</h2>
          <div className="mt-2 grid grid-cols-2 gap-4 text-[1.2rem]">
            <ul className="list-disc list-inside">
              <li>SQL</li>
              <li>Database design</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>MSSQL/MySQL</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
