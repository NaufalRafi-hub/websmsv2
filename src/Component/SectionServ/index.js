import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./section2.css";
import Data from "./Data";
import DataTitle from "./DataTitle";
import { Link } from "react-router-dom";
import { useState } from "react";
// import Slider from "react-slick";

const Section2 = (props) => {
  const { lang = "en" } = props;
  const [mar , setMar] = useState("0")

  return (
    <>
      <div id="section2"></div>
      <Container>
        <div className="row container-sec2">
          <h1>{lang === "en" ? DataTitle[0].title : DataTitle[1].title}</h1>
          <h3>{DataTitle[0].desc}</h3>
            {Data.map((data, index) => (
              <>
              <div
                className="col-sm cont-sec2 d-flex flex-column align-items-center"
                key={index}
                style={{marginTop: index * 40} }
              >
                <img src={data.cover}></img>
                <div className="wrap-abs"></div>
                <div className="wrap-text">
                  <h2>{data.name}</h2>
                  <p className={index === 2 ? "p3" : ""}>{data.texts}</p>
                </div>
              </div>
              </>
            ))}
        </div>
      </Container>
    </>
  );
};

export default Section2;
