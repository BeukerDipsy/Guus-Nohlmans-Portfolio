export default function InfoBox({ title, description, children }: { title: string, description: string, children?: React.ReactNode }) {
  return (
    <div className="
      h-[9.93rem] 
      md:w-auto w-[32%]
      md:p-4 
      rounded-2xl 
      flex 
      md:flex-row flex-col
      bg-backgroundGreen 
      inset-shadow-[0.4rem_0.4rem_0_rgba(0,0,0,0.18)]
      justify-between
      items-center
    ">
      <div className="h-[90%] md:aspect-square mt-2 flex items-center justify-center md:p-4">
        {children}
      </div>

      <div className="flex flex-col items-start justify-center flex-1 text-center md:text-left">

        <label className="hidden md:block p-1 font-semibold text-lg text-secondaryYellow">
          {title}
        </label>

        <p className="md:p-1 p-4 md:font-regular font-semibold text-3xl md:text-lg text-primaryYellow">
          {description}
        </p>
      </div>
    </div>
  );
}