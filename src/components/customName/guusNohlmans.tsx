import DipsyOSvg from "./dipsyOSvg";
import GrowingLetters from "./growingLetters";

export default function GuusNohlmans({ onClick }: { onClick: () => void }) {
  return (
    <div className="scale-80 md:scale-100 flex justify-center text-[9rem] font-bold cursor-pointer gap-8 hover:scale-102 transition" onClick={onClick}> {/** Move naar Guus nohlmans geedeelte **/}
      <GrowingLetters text="Guus" />
      <div className="flex">
        <GrowingLetters text="N" />
        <div className="mt-9 -ml-5 -mr-4 hover:scale-113 transition">
          <DipsyOSvg />
        </div>
        <GrowingLetters text="hlmans" />
      </div>
    </div>
  );
}