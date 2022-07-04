import React, { useState } from "react";
import "./card.css";
import "./overlap.css";
import Overlap from "./Overlap";

const Card = (props) => {
  let [hoverclass, sethoverclass] = useState("");
  const { charname, realname, imageurl, dob, nationality, age, sociallink } =
    props;
  //  destructuring here, props will be given as an object and that object is detructured
  // we can pass the destructured props directly in the argument of the function declaration
  return (
    <div
      className="card tc dib pa1 ma3 br2 grow bw2 shadow-5 myflex overflow-hidden border-box"
      onMouseEnter={() => {
        sethoverclass("infocontainershow");
      }}
      onMouseLeave={() => {
        sethoverclass("");
      }}
    >
      <div className="imgcont">
        <h3 className="f2 cname">{charname.toUpperCase()}</h3>
        <Overlap
          hoverclass={hoverclass}
          realname={realname}
          dob={dob}
          nationality={nationality}
          age={age}
          sociallink={sociallink}
        />
        <div className="bgbox"></div>
        <img src={imageurl} alt="charimage" />
      </div>
    </div>
  );
};
export default Card;
