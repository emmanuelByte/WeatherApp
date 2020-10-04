import React from "react";

const Avater = ({ img }) => {
  return (
    <div className="circle-img">
      <img src={img} alt="avatar_img" />
    </div>
  );
};

export default Avater;
