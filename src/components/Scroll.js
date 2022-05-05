import React from "react";
const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};
export default Scroll;

// Every props object has children property.
// in our case that children is of type cardlist.
// so by creating scroll component we are returning a div that has the css styiling and that css styles apply
// to the children of scroll component.
