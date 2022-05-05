import React from "react";
// in react always keep the first letter of the function capital
const Searchbox = ({ searchchange }) => {
  return (
    <div className="pa2">
      <input
        className="pa5 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchchange}
      />
    </div>
  );
};
export default Searchbox;
