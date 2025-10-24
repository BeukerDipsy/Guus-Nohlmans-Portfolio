

import { useState } from "react";
import InfoBox from "./InfoBox";
import InputField from "./InputField";


export default function ContactBox() {
  const [fillColor, setFillColor] = useState(["#FFF99A"]);

  return (

    <div className="flex row">
      {/** Een grote component **/}
      <div className="w-[68%] p-8 rounded-2xl border bg-primaryYellow flex flex-col gap-4 shadow-[1rem_1rem_0_rgba(0,0,0,0.18)]">
        <div className="flex flex-row gap-4">
          <InputField FieldName="Name" placeholder="Your name" />
          <InputField FieldName="Email" placeholder="Your email" />
        </div>
        <InputField FieldName="Subject" placeholder="Subject" />
        <InputField FieldName="Message" placeholder="Your message" />
        <button className="mr-auto bg-primaryGreen flex flex-row gap-2 text-secondaryYellow font-semibold p-3 rounded-md hover:bg-yellow-400 hover:text-secondaryGreen transition cursor-pointer shadow-[0.2rem_0.2rem_0_rgba(0,0,0,0.18)] active:shadow-none active:transition-none active:ml-[0.2rem] active:mt-[0.2rem] mb-[0.2rem] active:mb-0 transition-colors transition-[fill]" onMouseOver={() => setFillColor(["#214013"])} onMouseOut={() => setFillColor(["#FFF99A"])}  >
          <svg fill={fillColor[0]} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 transition">
            <path d="M31.376 0c-0.191 0-0.422 0.054-0.691 0.168l-29.833 12.659c-1.074 0.456-1.142 1.334-0.151 1.951l8.43 5.251c0.991 0.617 2.301 1.94 2.912 2.939l5.053 8.274c0.29 0.474 0.64 0.71 0.977 0.71 0.372 0 0.727-0.286 0.97-0.851l12.758-29.805c0.345-0.808 0.148-1.296-0.426-1.297zM10.174 18.248l-6.833-4.257 22.925-9.726-14.756 15.006c-0.451-0.4-0.909-0.757-1.337-1.023zM17.898 28.602l-4.076-6.672c-0.241-0.394-0.558-0.814-0.912-1.231l14.825-15.075z"></path>
          </svg>
          Send Message
        </button>
      </div>

      {/** Components per box **/}
      <div className="pl-10 space-y-6 flex flex-col w-[32%]">
        <InfoBox title="Email" description="example.mail@gmail.com" />
        <InfoBox title="Phone" description="+31 6 12345678" />
        <InfoBox title="Availability" description="Available" />
      </div>

    </div>
  );
}