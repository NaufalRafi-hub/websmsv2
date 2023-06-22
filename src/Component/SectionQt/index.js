import React from "react";
import Data from "./Data";
import Container from 'react-bootstrap/Container';
import './sectionqt.css';


const SectionQt = (props) => {
  const { lang = "en" } = props;

  return (
      <div className="bg-navy py-140 text-center">
        <Container>
          <div className="qt-wrap">
            <div className="qt-cont">
                <h1 className="yellow">11+</h1>
                <h2>YEARS OF EXPERIENCES</h2>
            </div>  
            <div className="qt-cont">
                <h1 className="yellow">1500+</h1>
                <h2>PROJECT HANDLED</h2>
            </div>  
            <div className="qt-cont3">
                <h1 className="yellow">300+</h1>
                <h2>SATISFIED CLIENT</h2>
            </div>            
          </div>
            
        </Container >

      </div>
  );
};

export default SectionQt;
