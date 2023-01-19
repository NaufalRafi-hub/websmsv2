import React from "react";
import { Container } from "react-bootstrap";
import "./section4abt.css";
// import Groups from "../../../Images/webp/groups.webp";
import Vector from "../../Images/file_copy.png";
// import Section5 from "../../Section5";
import Data from "./Data";
import CountUp from 'react-countup';

const index = (props) => {
  const { lang = "en" } = props;

  return (
    <>
      {lang === "en" ? (
        <Container>
          <div className="wrap-abt4 text-center">
            <h1>{Data[0].head}</h1>
          </div>
          <div className="row wrap-cont-abt4 justify-content-center">
          <div className="col-md cont-abt4 text-center p-4 align-item">
              <img src={Vector}></img>
            </div>
            <div className="col-md cont-abt4 p-4 ">
              <h2>
                <CountUp start={0} end={1500}  duration={5.75}/>
                +
              </h2>
              <h2>{Data[0].first}</h2>
            </div>
          </div>
        </Container>
      ) : (
        <Container>
          <div className="wrap-abt4 text-center">
            <h1>{Data[1].head}</h1>
          </div>
          <div className="row wrap-cont-abt4 justify-content-center">
          <div className="col-md cont-abt4 text-center p-4 align-item">
              <img src={Vector}></img>
            </div>
            <div className="col-md cont-abt4 p-4 ">
              <h2>
                <CountUp start={0} end={1500}  duration={5.75}/>
                +
              </h2>
              <h2>{Data[1].first}</h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default index;
