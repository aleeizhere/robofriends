import React from "react";
// in react always keep the first letter of the function capital
const Searchbox = ({ searchchange }) => {
  return (
    <div className="pa2">
      <input
        style={{"backgroundColor":"var(--white)", "padding":"5px","width":"20vw", "border":"none","outline":"none"}}
        type="search"
        placeholder="Search Heist Members"
        onChange={searchchange}
      />
    </div>
  );
};
export default Searchbox;
