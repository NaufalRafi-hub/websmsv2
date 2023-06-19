import React from "react";
import Data from "./Data";
import Container from 'react-bootstrap/Container';
import './sectionqt.css';


const SectionQt = (props) => {
  const { lang = "en" } = props;

  return (
      <div className="bg-navy py-140 text-center">
    <Container>

        <h2 className="fw-bold fs-sm-title t-white">
          {lang === "en" ? Data[0].head : Data[1].head}
        </h2>
        <h2 className="fs-big quote t-white mt-30">
          {lang === "en" ? Data[0].subhead : Data[1].subhead}
        </h2>
    </Container >

      </div>
  );
};

export default SectionQt;
