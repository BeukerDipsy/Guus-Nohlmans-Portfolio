import Project from "@/components/project";
import UnderConstructionPage from "@/components/underConstruction";
const underConstruction = false;

export default function ActiPulsePage() {
  if (underConstruction) {
    return (
      <UnderConstructionPage projectName="ActiPulse" />
    );
  } else if (!underConstruction) {
    return (
      <Project
        title="ActiPulse"
        shortDescription="Tackling sitting-habits with smart reminders and activity tracking."
      >
        <div className="flex-row flex mt-4 space-x-6">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <path d="M10 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3" /> <path d="M16 7l-1 10" /> <path d="M20 7l-1 10" /> <path d="M14 10h7.5" /> <path d="M21 14h-7.5" /></svg>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" /> <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" /> <path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" /> <path d="M11 6l0 .01" /> <path d="M13 18l0 .01" /> </svg>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z"></path><path d="M17 8v8h4"></path><path d="M13 15l1 1"></path><path d="M3 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1"></path></svg>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>
        </div>
      </Project>
    );
  }
}