import React from "react";
import Data from "./Data";

const SectionQt = (props) => {
  const { lang = "en" } = props;

  return (
    <>
      <div className="bg-navy py-140 text-center">
        <h2 className="fw-bold fs-sm-title t-white">
          {lang === "en" ? Data[0].head : Data[1].head}
        </h2>
        <h2 className="fw-bold fs-big quote t-white">
          {lang === "en" ? Data[0].subhead : Data[1].subhead}
        </h2>
      </div>
    </>
  );
};

export default SectionQt;
