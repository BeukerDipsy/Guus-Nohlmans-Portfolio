import Project from "@/components/project";

export default function ProjectmapPage() {
  return (
    <Project
      title="Projectmap"
      shortDescription="Visualize and manage construction projects with ease using a specialized dashboard."
    >
      {/* technique icons */}
      <div className="flex-row flex mt-4 space-x-6">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z"></path><path d="M17 8v8h4"></path><path d="M13 15l1 1"></path><path d="M3 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1"></path></svg>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path></svg>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5"></path><path d="M9 12h4"></path><path d="M11 12v6"></path><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"></path></svg>
      </div>
      {/* description */}
      <div>
        <p>
          A dashboard for visualizing and managing projects, specialized for the construction industry.
        </p>
        <br />
        <p>
          The system includes the following:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Dashboard</strong> – provides employees with an overview of their daily projects, tasks and equipment.
          </li>
          <li>
            <strong>Project overview</strong> – gives project managers a clear overview of all ongoing projects, including progress, deadlines and more.
          </li>
          <li>
            <strong>Agenda</strong> – Helps getting a clear overview of all upcoming/previous projects and deadlines.
          </li>
          <li>
            <strong>User management</strong> – allows administrators to manage user accounts, assign roles and add new users to the system by activation codes.
          </li>
        </ul>
        <br />
        <p>
          The project is currently in development, with the dashboard and project overview being the main focus. The system is being developed using React for the frontend and Node.js for the backend, with a SQL database to store all data. The project is expected to be completed by july, but it is already being tested and used by the client.
        </p>
        <br />
        <p>
          This is the first project I am working on as a software developer within my own company, and it is a great opportunity to gain experience in the field and work on a real-world project. I am excited to see how the project will develop and how it will be received by the client and users.
        </p>
      </div>
      {/* media */}
      <div>
        <p className="text-2xl mb-2 italic">Dashboard</p>
        <img src={`images/Projectmap_Dashboard.png`} className=" overflow-hidden w-full rounded-xl" />
        <p className="text-2xl mt-6 mb-2 italic">Project overview</p>
        <img src={`images/Projectmap_AllProjects.png`} className=" overflow-hidden w-full rounded-xl" />
        <br></br>
        <img src={`images/Projectmap_Project.png`} className=" overflow-hidden w-full rounded-xl" />
        <br></br>
        <img src={`images/Projectmap_Job.png`} className=" overflow-hidden w-full rounded-xl" />
         <p className="text-2xl mt-6 mb-2 italic">Agenda</p>
        <img src={`images/Projectmap_Agenda.png`} className=" overflow-hidden w-full rounded-xl" />
        <p className="text-2xl mt-6 mb-2 italic">User management</p>
        <img src={`images/Projectmap_User.png`} className=" overflow-hidden w-full rounded-xl" />
        {/* More media coming soon... */}
      </div>
    </Project>
  );
}  