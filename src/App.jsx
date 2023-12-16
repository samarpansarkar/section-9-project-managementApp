import ProjectsSideBar from "./Components/ProjectsSidebar";
import { React, Fragment } from "react";
import NewProject from "./Components/NewProject";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar />
      <NewProject />
    </main>
  );
}

export default App;
