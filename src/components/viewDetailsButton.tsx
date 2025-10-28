import { useRouter } from "next/navigation";

export default function ViewDetailsButton({ path }: { path: string }) {
  const router = useRouter();
  return (
    <>
      <div className="flex-grow"></div>
      <span className="text-secondaryGreen font-bold hover:underline cursor-pointer flex justify-end items-center" onClick={() => router.push(`/${path.toLowerCase()}`)}>
        View details
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </span>
    </>
  )
}