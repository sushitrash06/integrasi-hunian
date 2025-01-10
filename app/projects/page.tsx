import * as React from "react";
import GaleryGrid from "../Component/Galery-grid";

const ProjectsPage: React.FunctionComponent= () => {
  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold text-center mb-8">Our Projects</h1>
      <div>
        <GaleryGrid />
      </div>
    </div>
  );
};

export default ProjectsPage;
