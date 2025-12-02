import Link from "next/dist/client/link";
import React from "react";

export default function Project({ title, shortDescription, children }: { title: string, shortDescription: string, children: React.ReactNode }) {
  const childrenArray = React.Children.toArray(children);
  const techniques = childrenArray[0];
  const descriptionContent = childrenArray[1];
  const media = childrenArray.slice(2);
  
  return (
    <section className="max-w-[900px] mx-auto w-full pt-[5vh]">
      <div>
        <Link href="/" className="inline-flex items-center text-extra-1 dark:text-extra-2 hover:text-primary-600">
          <svg data-v-e8d572f6="" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon mr-2" width="1em" height="1em" viewBox="0 0 256 256">
            <path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8"></path>
          </svg> Back to Home
        </Link>
      </div>
      <div className="mb-12">
        <h1 className="text-[4rem] md:text-[6rem] [text-shadow:0.4rem_0.4rem_0rem_rgb(0_0_0_/0.18)] text-secondaryYellow font-bold text-left">{title}</h1>
        {/* <h1 className="text-5xl font-bold mb-6 text-secondaryYellow">{title}</h1> */}
        <p className="text-2xl -mt-3 mb-7">{shortDescription}</p>
        <img src={`images/${title}.png`} alt={title} className=" overflow-hidden w-full rounded-xl" />
        {techniques}
      </div>
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-4 text-secondaryYellow">Project Details</h2>
        <p className="text-lg leading-7">
          {descriptionContent}
        </p>
      </div>
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-4 text-secondaryYellow">Media</h2>
         <p className="text-lg leading-7">
          {media}
        </p>
      </div>
    </section>

  );
}
