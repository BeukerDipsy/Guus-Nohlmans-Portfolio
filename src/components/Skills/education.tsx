export default function Education() {

  const TrevianumData = [
    {
      category: "HTML/CSS",
      date: "Sep 2021 - Jul 2023",
    },
    {
      category: "Database Management",
      date: "Sep 2022 - Jul 2023",
    },
  ];

  const FontysData = [
    {
      category: "Software Development",
      date: "Sep 2023 - Feb 2025",
    },
    {
      category: "Game Design",
      date: "Feb 2025 - Jul 2025",
    },
    {
      category: "Front-end Development",
      date: "Sep 2025 - present",
    },
  ];

  return (
    <div className="px-8 py-6 rounded-2xl min-w-[30vw] mx-auto md:mx-0 md:max-w-[40vw] bg-primaryYellow shadow-[0.8rem_0.8rem_0_rgba(0,0,0,0.12)] items-start h-full text-primaryGreen">
      <h1 className="text-[6.3rem] md:text-[3.15rem] [text-shadow:0.25rem_0.25rem_0rem_rgb(0_0_0_/0.18)] font-bold">Education</h1>
      <hr className="border-2 my-1 rounded-full" />
      <div className="flex-col">
        <div>
          <h2 className="leading-none text-[3.6rem] md:text-[1.8rem] pt-4 font-semibold">HAVO - Informatics</h2>
          <h3 className="text-[2.3rem] md:text-[1.13rem]">Trevianum scholengroep</h3>
        </div>
        <div className="md:mt-4 relative ml-2.5 pl-8 border-l-2 md:border-l-4">
          {TrevianumData.map((entry, index) => (
            <div key={index} className="flex items-start mb-6 last:mb-0">
              <div className="bg-primaryGreen rounded-full h-5 w-5 absolute -left-[0.9rem] md:-left-3"></div>
              <div className="">
                <h2 className="leading-none font-semibold text-[2.5rem] md:text-[1.35rem]">{entry.category}</h2>
                <p className="font-regular text-[1.25rem]">{entry.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border my-6 rounded-full" />
      <div className="flex-col">
        <div>
          <h2 className="leading-none text-[3.6rem] md:text-[1.8rem] font-semibold">HBO ICT</h2>
          <h3 className="text-[2.3rem] md:text-[1.13rem]">Fontys University of Applied Sciences</h3>
        </div>
        <div className="md:mt-4 relative ml-2.5 pl-8 border-l-2 md:border-l-4">
          {FontysData.map((entry, index) => (
            <div key={index} className="flex items-start mb-6 last:mb-0">
              <div className="bg-primaryGreen rounded-full h-5 w-5 absolute -left-[0.9rem] md:-left-3"></div>
              <div className="">
                <h2 className="leading-none font-semibold text-[2.5rem] md:text-[1.35rem]">{entry.category}</h2>
                <p className="font-regular text-[1.25rem]">{entry.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

{/* <div className="relative pl-8 border-l-2 border-gray-300">
        {educationData.map((entry, index) => (
          <div key={index} className="flex items-center mb-6 last:mb-0">
            <div className="bg-white rounded-full h-4 w-4 absolute -left-2"></div>
            <div className="text-white">
              <h2 className="font-semibold">{entry.category}</h2>
              <p className="text-sm">{entry.date}</p>
            </div>
          </div>
        ))}
      </div> */}
