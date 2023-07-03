import React from "react";
import Data from "./Data";
import Container from 'react-bootstrap/Container';
import './sectionqt.css';
import CountUp from 'react-countup';


const SectionQt = (props) => {
  const { lang = "en" } = props;

  return (
      <div className="bg-navy py-80 text-center">
        <Container>
          <div className="qt-wrap">
            <div className="qt-cont">
                <h1 className="yellow">                
                <CountUp start={0} end={11}  duration={5.75}/>
                +</h1>
                <h2>YEARS OF EXPERIENCES</h2>
            </div>  
            <div className="qt-cont">
                <h1 className="yellow">                
                <CountUp start={0} end={1500}  duration={5.75}/>
                +</h1>
                <h2>PROJECT HANDLED</h2>
            </div>  
            <div className="qt-cont3">
                <h1 className="yellow">                
                <CountUp start={0} end={300}  duration={5.75}/>
                +</h1>
                <h2>SATISFIED <br/>CLIENT</h2>
            </div>            
          </div>
            
        </Container >

      </div>
  );
};

export default SectionQt;
