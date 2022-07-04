import React from "react";
import Instalogo from "../Instalogo";

const Overlap = (props) => {
  const { hoverclass, realname, dob, age, nationality, sociallink } = props;

  function firstcaps(strword) {
    const x = strword.split(" ");
    let temp = x.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return temp.join(" ");
  }

  return (
    <div className={`infocontainer ${hoverclass}`}>
      <div className="infobit realname">
        <h4>Real Name</h4>
        <h3>{firstcaps(realname)}</h3>
      </div>

      <div className="infobit age">
        <h4>Age</h4>
        <h3>
          {age} yrs - {dob}
        </h3>
      </div>

      <div className="infobit nation">
        <h4>Nationality</h4>
        <h3>{firstcaps(nationality)}</h3>
      </div>

      <div className="infobit socialmedia">
        <h4>Instagram</h4>
        <div className="socialicon">
          <a href={sociallink} target="_blank" rel="noreferrer">
            <Instalogo fill="var(--white)" /> <span>{sociallink.split("/")[3]}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Overlap;
