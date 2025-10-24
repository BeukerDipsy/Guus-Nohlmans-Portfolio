

export default function ContactBox() {
  return (
    <div className="flex row">
      <div className=" w-[68%] p-8 rounded-2xl border border-secondaryYellow ">
        <div className="flex flex-row gap-4 mb-4">
          <div className="">
            <label className="block font-semibold text-lg">Name</label>
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-md border border-secondaryYellow " />
          </div>
          <div className="w-full">
            <label className="block font-semibold text-lg">Email</label>
            <input type="email" placeholder="Your Email" className="w-full p-4 rounded-md border border-secondaryYellow " />
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-lg">Subject</label>
          <input type="text" placeholder="Subject" className="w-full p-4 rounded-md border border-secondaryYellow" />
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-lg">Message</label>
          <textarea placeholder="Your Message" className="w-full p-4 rounded-md border border-secondaryYellow mb-4 h-32"></textarea>
        </div>
        <button className="bg-secondaryYellow text-secondaryGreen font-semibold py-2 px-4 rounded-md hover:bg-yellow-400 transition">Send Message</button>
      </div>

      <div className="pl-10 space-y-6 flex flex-col w-[32%]  ">
        <div className=" w-full h-full w-[90%] p-4 rounded-2xl border border-secondaryYellow flex flex-row ">
          <div className="h-full w-[29%] rounded-2xl border border-secondaryYellow">
          </div>
          <label className="p-4 font-semibold text-lg self-center">Email</label>
        </div>
        <div className=" w-full h-full w-[90%] p-4 rounded-2xl border border-secondaryYellow flex flex-row ">
          <div className="h-full w-[29%] rounded-2xl border border-secondaryYellow">
          </div>
          <label className="p-4 font-semibold text-lg self-center">Phone</label>
        </div>
        <div className=" w-full h-full w-[90%] p-4 rounded-2xl border border-secondaryYellow flex flex-row ">
          <div className="h-full w-[29%] rounded-2xl border border-secondaryYellow">
          </div>
          <label className="p-4 font-semibold text-lg self-center">Availability</label>
        </div>
      </div>

    </div>
  );
}