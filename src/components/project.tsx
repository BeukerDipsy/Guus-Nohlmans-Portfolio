import Link from "next/dist/client/link";
import React from "react";

export default function Project({ title, shortDescription, children }: { title: string, shortDescription: string, children: React.ReactNode }) {
  const childrenArray = React.Children.toArray(children);
  const techniques = childrenArray[0];
  const descriptionContent = childrenArray[1];
  const media = childrenArray.slice(2);
  
  return (
    <section className="mx-auto w-full max-w-[1100px] px-4 pb-16 pt-6 md:px-8 md:pb-24 md:pt-10">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-[2.6rem] font-semibold text-extra-1 transition hover:text-primary-600 dark:text-extra-2 md:text-base">
          <svg data-v-e8d572f6="" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="icon mr-2 h-6 w-6 md:h-4 md:w-4" width="1em" height="1em" viewBox="0 0 256 256">
            <path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8"></path>
          </svg> Back to Home
        </Link>
      </div>
      <div className="mb-12 md:mb-16">
        <h1 className="text-[5rem] leading-none md:text-[5.4rem] [text-shadow:0.4rem_0.4rem_0rem_rgb(0_0_0_/0.18)] text-secondaryYellow font-bold text-left">
          {title}
        </h1>
        <p className="mt-4 text-[2.6rem] leading-[2.35rem] text-secondaryGreen md:text-[1.45rem] md:leading-[2.2rem]">
          {shortDescription}
        </p>
        <img src={`images/${title}.png`} alt={title} className="mt-6 w-full overflow-hidden rounded-xl" />
        <div className="mt-6 text-[1.4rem] leading-[2.2rem] md:text-base md:leading-normal">
          {techniques}
        </div>
      </div>
      <div className="mb-16 md:mb-20">
        <h2 className="mb-4 text-[5rem] font-bold text-secondaryYellow md:text-[2.4rem]">Project Details</h2>
        <p className="text-[2rem] leading-[2.3rem] md:text-[1.15rem] md:leading-[2rem]">
          {descriptionContent}
        </p>
      </div>
      <div className="mb-8 md:mb-12">
        <h2 className="mb-4 text-[5rem] font-bold text-secondaryYellow md:text-[2.4rem]">Media</h2>
         <p className="text-[2rem] leading-[2.3rem] md:text-[1.15rem] md:leading-[2rem]">
          {media}
        </p>
      </div>
    </section>

  );
}
