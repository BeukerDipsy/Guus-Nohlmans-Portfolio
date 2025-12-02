

import { useState } from "react";
import InfoBox from "./InfoBox";
import EmailForm from "./emailForm";


export default function ContactBox() {
  const [fillColor] = useState("#FFF99A");

  return (
    <div className="flex md:flex-row md:justify-between flex-col items-center md:items-start gap-y-10 md:gap-y-0">
      <div className="w-full p-8 rounded-2xl border bg-primaryYellow flex flex-col gap-4 shadow-[1rem_1rem_0_rgba(0,0,0,0.18)]">
        <EmailForm />
      </div>
      <div className="md:pl-10 md:space-y-7 flex justify-between flex-row md:flex-col w-full md:w-auto md:mx-auto ">
        <InfoBox title="Email" description="contact@guusn.nl">
          <svg
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Email icon"
            focusable="false"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
          </svg>
        </InfoBox>
        <InfoBox title="Phone" description="+31 6 12345678" >
          <svg
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Email icon"
            focusable="false"
          >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
          </svg>
        </InfoBox>
        <InfoBox title="Availability" description="Available" >
          <svg
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Email icon"
            focusable="false"
          >
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
          </svg>
        </InfoBox>
      </div>

    </div >
  );
}