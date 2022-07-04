import React from "react";
import Card from "./Card";
const Cardlist = ({ robots }) => {
  // if (true) {
  //   throw new Error("Nooo!");
  // }
  const CardCompList = robots.map((user, i) => {
    // pehla argument hamesha array ka element hota hai dusra argument index hota hai
    return (
      <Card
        key={i}
        charname={robots[i].charname}
        realname={robots[i].realname}
        imageurl={robots[i].imageurl}
        dob={robots[i].dob}
        age={robots[i].age}
        nationality={robots[i].nationality}
        sociallink={robots[i].sociallink}
      />
    );
  });
  return <div>{CardCompList}</div>;
};
export default Cardlist;
