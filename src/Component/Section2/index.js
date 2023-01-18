import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../Section2/section2.css";
import Data from "./Data";
import DataTitle from "./DataTitle";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Section2 = (props) => {
  const { lang = "en" } = props;
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    speed: 500,
    // autoplaySpeed: 1500,
    // cssEase: "linear",
    adaptiveHeight: true,
    // arrows: true,
    dots: true,
    // infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 460,
      //   settings: {
      //     slidesToShow: 1.5,
      //   },
      // },
      // {
      //   breakpoint: 400,
      //   settings: {
      //     slidesToShow: 1.2,
      //   },
      // },
    ],
  };

  return (
    <>
      <div id="section2"></div>
      <Container>
        <div className="container-sec2">
          <h1>{lang === "en" ? DataTitle[0].title : DataTitle[1].title}</h1>
          <h3>{DataTitle[0].desc}</h3>
          <Slider {...settings}>
            {Data.map((data, index) => (
              <div
                className="col-sm cont-sec2 d-flex flex-column align-items-center"
                key={index}
              >
                <img src={data.cover}></img>
                <div className="wrap-abs"></div>
                <div className="wrap-text">
                  <h2>{data.name}</h2>
                  <p className={index === 2 ? "p3" : ""}>{data.texts}</p>
                  <Link
                    to={`Service/${data.name.replaceAll(" ", "-")}/${index}`}
                  >
                    {data.quotes}
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default Section2;
