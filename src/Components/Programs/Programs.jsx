import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import Program_icon_1 from "../../assets/program-icon-1.png";
import Program_icon_2 from "../../assets/Program-icon-2.png";
import Program_icon_3 from "../../assets/Program-icon-3.png";

function Programs() {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="pro" />
        <div className="caption">
          <img src={Program_icon_1} alt="cap" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="pro" />
        <div className="caption">
          <img src={Program_icon_2} alt="cap" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="pro" />
        <div className="caption">
          <img src={Program_icon_3} alt="cap" />
          <p>Graduation Degree</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
