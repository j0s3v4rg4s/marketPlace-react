import React from "react";
import "./Section.scss";

const Section = ({ className, title, children }) => {
  return (
    <div className={`Section ${className}`}>
      <div className="Section__header">{title}</div>
      <div className="Section__body">{children}</div>
    </div>
  );
};

export default Section;
