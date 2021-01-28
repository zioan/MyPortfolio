import React from "react";
import Education from "./Education";
import Skills from "./Skills";
import Goals from "./Goals";
import WorkExperience from "./WorkExperience";
import Languages from "./Languages";
import Drivers from "./Drivers";

export default function Curriculum() {
  return (
    <div className="curriculum">
      <div className="left">
        <Education />
        <Languages />
        <Skills />
        <Goals />
        <Drivers />
      </div>
      <div className="line"></div>
      <div>
        <WorkExperience />
      </div>
    </div>
  );
}
