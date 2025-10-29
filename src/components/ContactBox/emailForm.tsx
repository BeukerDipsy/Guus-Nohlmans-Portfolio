import React from 'react';
import emailjs from 'emailjs-com';
import InputField from "./InputField";
import { useState } from "react";

export default function EmailForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [messageSent, setMessageSent] = useState<boolean | null>(null);
  const [fillColor, setFillColor] = useState<string[]>(["#FFF99A"]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const USER_ID = process.env.NEXT_PUBLIC_USER_ID as string;

    console.log('Sending email with:', SERVICE_ID, TEMPLATE_ID, USER_ID);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, USER_ID)
      .then((result) => {
        setLoading(false);
        setMessageSent(true);
        setFillColor(["#FFF99A"]);
        console.log(result.text);
      }, (error) => {
        setLoading(false);
        setMessageSent(false);
        setFillColor(["#FFF99A"]);
        console.log(error.text);
      });
  };

  return (
    loading ? <p className="text-primaryGreen font-bold text-[2rem] m-auto">Sending email...</p> :
      <form onSubmit={sendEmail} className="text-secondaryGreen">
        <div className="flex flex-row gap-4">
          <div className="w-full mb-4 flex-row flex gap-4 justify-between">
            <div className="w-full">
              <label className="block font-semibold text-lg">Name</label>
              <input type="text" name="name" placeholder="Your name" required className="placeholder:text-primaryGreen w-full p-4 text-lg rounded-md border-3 border-primaryGreen bg-primaryYellow outline-none focus:border-secondaryGreen focus:border-3" />
            </div>
            <div className="w-full">
              <label className="block font-semibold text-lg">Email</label>
              <input type="email" name="email" placeholder="Your email" required className="placeholder:text-primaryGreen w-full p-4 text-lg rounded-md border-3 border-primaryGreen bg-primaryYellow outline-none focus:border-secondaryGreen focus:border-3" />
            </div>
          </div>
        </div>
        <div className="w-full mb-4 ">
          <label className="block font-semibold text-lg">Subject</label>
          <input type="text" name="subject" placeholder="Subject" required className="placeholder:text-primaryGreen w-full p-4 text-lg rounded-md border-3 border-primaryGreen bg-primaryYellow outline-none focus:border-secondaryGreen focus:border-3" />
        </div>
        <div className="w-full mb-4 ">
          <label className="block font-semibold text-lg">Message</label>
          <textarea name="message" placeholder="Your message" required className="placeholder:text-primaryGreen border-primaryGreen w-full p-4 text-lg rounded-md border-3 bg-primaryYellow mb-4 h-32 outline-none focus:border-secondaryGreen focus:border-3"></textarea>
        </div>
        <div className="flex flex-row justify-start items-center gap-4">
          <button type="submit" className="bg-primaryGreen flex flex-row gap-2 text-secondaryYellow font-semibold p-3 rounded-md hover:bg-yellow-400 hover:text-secondaryGreen cursor-pointer shadow-[0.2rem_0.2rem_0_rgba(0,0,0,0.18)] active:shadow-none active:transition-none active:ml-[0.2rem] active:mt-[0.2rem] mb-[0.2rem] active:mb-0 transition-colors transition-[fill]" onMouseOver={() => setFillColor(["#214013"])} onMouseOut={() => setFillColor(["#FFF99A"])}  >
            <svg fill={fillColor[0]} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 transition">
              <path d="M31.376 0c-0.191 0-0.422 0.054-0.691 0.168l-29.833 12.659c-1.074 0.456-1.142 1.334-0.151 1.951l8.43 5.251c0.991 0.617 2.301 1.94 2.912 2.939l5.053 8.274c0.29 0.474 0.64 0.71 0.977 0.71 0.372 0 0.727-0.286 0.97-0.851l12.758-29.805c0.345-0.808 0.148-1.296-0.426-1.297zM10.174 18.248l-6.833-4.257 22.925-9.726-14.756 15.006c-0.451-0.4-0.909-0.757-1.337-1.023zM17.898 28.602l-4.076-6.672c-0.241-0.394-0.558-0.814-0.912-1.231l14.825-15.075z"></path>
            </svg>
            Send Message
          </button>
          {messageSent !== null && (
            messageSent ? (
              <p className="text-primaryGreen font-semibold">
                Your email has been sent successfully!
              </p>
            ) : (
              <p className="text-red-600 font-semibold">
                There was an issue sending your message.
              </p>
            ))}
        </div>
      </form>
  );
};