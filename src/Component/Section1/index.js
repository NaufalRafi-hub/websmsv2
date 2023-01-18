import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../Section1/section1.css";
import Button from "react-bootstrap/Button";
import Data from "./Data.js";

const Section1 = (props) => {
  const { lang = "en" } = props;

  return (
    <>
      <Container>
        {lang === "en" ? (
          <div className="row container-sec1 bg-blur  p-5">
            <div className="col-md cont-sec1-left ">
              <h1>{Data[0].text1}</h1>
            </div>
            <div className="col-md cont-sec1-right">
              <h3>{Data[0].head}</h3>
              <h3>{Data[0].subhead}</h3>
              <h3>{Data[0].trihead}</h3>
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
