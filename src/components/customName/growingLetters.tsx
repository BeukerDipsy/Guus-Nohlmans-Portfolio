export default function GrowingLetters({ text }: { text: string }) {

  return (
    <div className="flex justify-">
      {text.split("").map((letter, index) => (
        <h1 key={index} className="hover:scale-118 hover:rotate- transition inline-block"
          onMouseOver={(e) => {
            const randomRotation = Math.random() * 18 - 9;
            (e.currentTarget as HTMLElement).style.transform = `scale(1.18) rotate(${randomRotation}deg)`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = `scale(1) rotate(0deg)`;
          }}>
          {letter}
        </h1>
      ))}
    </div>
  );
}