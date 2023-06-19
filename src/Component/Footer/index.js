import React from "react";
import { Container } from "react-bootstrap";
// import Gmail from "../../Images/webp/gmail.webp";
// import Logowhite from "../../Images/webp/logowhite.webp";
import SMDw from "../../Images/logo-sms.png";
import Whatsapp from "../../Images/whatsapp.webp";
import Instagram from "../../Images/ig-icon.webp";
import "./footer.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import mailW from "../../Images/mail-w.png";
import phoneW from "../../Images/phone-w.png";
import Data from "./Data.js";
import { useContext } from "react";
import langContext from "../../Context/languageContext";

const Footer = () => {
  const { lang, setLang } = useContext(langContext);
  return (
    <section className="wrap-footer">
      <Container>
        {lang === "en" ? (
          <div className="row pt-5 pb-5 gap-5">
            <div className="col-lg-4 cont-footer">
              <img src={SMDw}></img>
              <h1>{Data[0].head}</h1>
            </div>
            <div className="col-lg-2 cont-footer">
              <h1>Menu</h1>
              <Link to="/" className="footer-nav">
                <h3>{Data[0].nav1}</h3>
              </Link>
              <Link to="/AboutUs" className="footer-nav">
                <h3>{Data[0].nav2}</h3>
              </Link>
              <HashLink smooth to="/#section2" className="footer-nav">
                <h3>{Data[0].nav3}</h3>
              </HashLink>
              <HashLink smooth to="/#section6" className="footer-nav">
                <h3>{Data[0].nav4}</h3>
              </HashLink>
            </div>
            <div className="col-lg cont-footer getin">
              <h1>{Data[0].subhead}</h1>
              <h3 className="">
                <b>CV. Sinar Media Sakti</b>
                <br></br>
                Aria Putra 8, Serua Indah<br></br>
                {Data[0].addy}
              </h3>
              <h3>
                <span className="img-foot">
                  <img src={mailW}></img>: info@smdigitama.com
                </span>
              </h3>
              <h3>
                <span className="img-foot">
                  <img src={phoneW}></img>: 021 - 74634075
                </span>
              </h3>
            </div>
            <div className="col-lg wa">
              <div className="cont-logo">
                <img src={Whatsapp}></img>
                <a href="https://api.whatsapp.com/send?phone=085692403618">
                  : {Data[0].wa}
                </a>
              </div>
              <div className="cont-logo">
                <img src={Instagram}></img>
                <a href="https://www.instagram.com/smdigitama/">
                  : @smdigitama
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="row pt-5 pb-5 gap-5">
            <div className="col-lg-4 cont-footer">
              <img src={SMDw}></img>
              <h1>{Data[1].head}</h1>
            </div>
            <div className="col-lg-2 cont-footer">
              <h1>Menu</h1>
              <Link to="/" className="footer-nav">
                <h3>{Data[1].nav1}</h3>
              </Link>
              <Link to="/AboutUs" className="footer-nav">
                <h3>{Data[1].nav2}</h3>
              </Link>
              <HashLink smooth to="/#section2" className="footer-nav">
                <h3>{Data[1].nav3}</h3>
              </HashLink>
              <HashLink smooth to="/#section6" className="footer-nav">
                <h3>{Data[1].nav4} Us</h3>
              </HashLink>
            </div>
            <div className="col-lg cont-footer getin">
              <h1>{Data[1].subhead}</h1>
              <h3 className="">
                <b>PT. Sinar Media Digitama</b>
                <br></br>
                Aria Putra 8, Serua Indah<br></br>
                {Data[1].addy}
              </h3>
              <h3>
                <span className="img-foot">
                  <img src={mailW}></img>: info@smdigitama.com
                </span>
              </h3>
              <h3>
                <span className="img-foot">
                  <img src={phoneW}></img>: 021 - 74634075
                </span>
              </h3>
            </div>
            <div className="col-lg">
              <div className="cont-logo">
                <img src={Whatsapp}></img>
                <a href="https://api.whatsapp.com/send?phone=085692403618">
                  : {Data[1].wa}
                </a>
              </div>
              <div className="cont-logo">
                <img src={Instagram}></img>
                <a href="https://www.instagram.com/smdigitama/">
                  : @smdigitama
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Footer;
