import React from "react";
import "./card.css";

const Card = (props) => {
  const { id, name, email, phone } = props;
  //  destructuring here, props will be given as an object and that object is detructured
  // we can pass the destructured props directly in the argument of the function declaration
  return (
    <div className="tc bg-light-green dib pa3 ma3 br3 grow bw2 shadow-5 myflex">
      <img src={`https://robohash.org/${id}?200x200`} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};
export default Card;
