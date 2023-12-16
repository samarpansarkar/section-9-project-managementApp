import ProjectsSideBar from "./Components/ProjectsSidebar";
import { React, Fragment } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
