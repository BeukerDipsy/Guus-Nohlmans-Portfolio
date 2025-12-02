export default function UnderConstructionPage({ projectName }: { projectName: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primaryGreen">
      <h1 className="text-4xl font-bold mb-4">{projectName} Project Page</h1>
      <p>
        Under construction...
      </p>
    </div>
  );
}