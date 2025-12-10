import Project from "@/components/project";

export default function WiebelTorenPage() {
  return (
    <Project title="WiebelToren" shortDescription="Making a game for the less-abled community using the Pillo from Hulan" >
      {/* technique icons */}
      <div className="flex-row flex mt-4 space-x-6">
        {/* Add SVG icons here */}
      </div>
      {/* description */}
      <div>
        <p>
          WiebelToren is an interactive game designed specifically for the less-abled community, utilizing the Pillo Hulan. This project aims to provide an engaging and accessible gaming experience that provides the unique needs of its users.
          <br />
          <br />
          The game mechanics are made to accommodate various physical and cognitive abilities, ensuring that players can fully immerse themselves in the experience.
          <br />
          <br />
          In WiebelToren players are challenged to knock over a tower of blocks by pressing the Pillo.
          <br />
          It seems simple but its designed to have underlaying layers of complexity to keep everyone engaged. For example: players can never miss the the tower but can aim at different parts of it to break it faster.
        </p>
      </div>
      {/* media */}
      <div>
        <p className="text-2xl mb-2 italic">Gameplay video</p>
        <div className="w-full rounded-lg overflow-hidden h-103 relative">
          <video
            src="/images/WiebelToren1.mp4"
            loop
            muted
            autoPlay
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover w-full"
          >
            Your browser does not support the video tag.
          </video>
        </div>

      </div>

    </Project>
  );
}