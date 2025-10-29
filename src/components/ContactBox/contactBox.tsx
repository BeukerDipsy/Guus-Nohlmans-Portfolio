

import { useState } from "react";
import InfoBox from "./InfoBox";
import EmailForm from "./emailForm";


export default function ContactBox() {
  const [fillColor, setFillColor] = useState(["#FFF99A"]);

  return (
    <div className="flex row">
      <div className="w-[68%] p-8 rounded-2xl border bg-primaryYellow flex flex-col gap-4 shadow-[1rem_1rem_0_rgba(0,0,0,0.18)]">
        <EmailForm />
      </div>
     

      {/** Components per box **/ }
  <div className="pl-10 space-y-6 flex flex-col w-[32%]">
    <InfoBox title="Email" description="example.mail@gmail.com" />
    <InfoBox title="Phone" description="+31 6 12345678" />
    <InfoBox title="Availability" description="Available" />
  </div>

    </div >
  );
}