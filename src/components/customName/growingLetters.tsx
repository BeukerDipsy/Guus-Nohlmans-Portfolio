export default function GrowingLetters({ text }: { text: string }) {
  return (
    <div className="flex justify-center">
      {text.split("").map((letter, index) => (
        <h1 key={index} className="hover:scale-118 transition">
          {letter}
        </h1>
      ))}
    </div>
  );
}