import React, { useRef } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Goals from "./Goals";
import WorkExperience from "./WorkExperience";
import Languages from "./Languages";
import Drivers from "./Drivers";

import ReactToPrint from "react-to-print";
import { ImPrinter } from "react-icons/im";

export default function Curriculum() {
  const componentRef = useRef();

  return (
    <div className="curriculum-layout">
      <ReactToPrint
        trigger={() => (
          <button className="print-btn">{<ImPrinter />} Print my CV</button>
        )}
        content={() => componentRef.current}
      />

      <div className="curriculum" ref={componentRef}>
        <section className="left">
          <Education />
          <Languages />
          <Skills />
          <Goals />
          <Drivers />
        </section>
        <div className="line"></div>
        <section>
          <WorkExperience />
        </section>
      </div>
    </div>
  );
}
