import React from "react";
import Card from "./Card";
const Cardlist = ({ robots }) => {
  const CardCompList = robots.map((user, i) => {
    // pehla argument hamesha array ka element hota hai dusra argument index hota hai
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
        phone={robots[i].phone}
      />
    );
  });
  return <div>{CardCompList}</div>;
};
export default Cardlist;
