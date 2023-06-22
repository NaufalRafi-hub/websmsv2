import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../Section1/section1.css";
import Button from "react-bootstrap/Button";
import Data from "./Data.js";
import shineLogo from "../../Images/shineLogo.png"
import lasFoto from "../../Images/las.jpg"


const Section1 = (props) => {
  const { lang = "en" } = props;

  return (
    <>
      <Container id="section1">
        {lang === "en" ? (
          <div className="row container-sec1 bg-blur">
            <div className="col-md cont-sec1-left ">
              <h2 className="yellow fw-bold">ABOUT US</h2>
              <h1>{Data[0].text1}</h1>
              <img className="las" src={lasFoto}></img>
            </div>
            <div className="col-md cont-sec1-right">
              <h3>{Data[0].head}</h3>
              <h3>{Data[0].subhead}</h3>
              <h3>{Data[0].trihead}
                  <a href="https://smdigitama.com/">
                  <img src={shineLogo} className="shine">
                  </img>
                    </a>              
              </h3>
            </div>
          </div>
        ) : (
          <div className="row container-sec1 bg-blur  p-5">
            <div className="col-md cont-sec1-left ">
              <h1>{Data[1].text1}</h1>
            </div>
            <div className="col-md cont-sec1-right">
              <h3>{Data[1].head}</h3>
              <h3>{Data[1].subhead}</h3>
              <h3>{Data[1].trihead}</h3>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Section1;
