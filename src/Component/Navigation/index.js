import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../Images/logo-sms.png";
import "./nav.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
import langContext from "../../Context/languageContext";
import Data from "./Data";
import React, { useState } from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

function BasicExample() {
  const { lang, setLang } = useContext(langContext);
  const onChange = () => {
    lang === "en" ? setLang("id") : setLang("en");
  };
  return (
    <Navbar bg="light" expand="lg" className="p-3 fixed-top">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={Logo} className="nav-logo"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {lang === "en" ? (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-btn">
              <Nav.Link>
                <Link to="/" className="nav-link">
                  {Data[0].nav1}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/AboutUs" className="nav-link">
                  {Data[0].nav2}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <HashLink smooth to="/#section2" className="nav-link">
                  {Data[0].nav3}
                </HashLink>
              </Nav.Link>
              <Nav.Link>
                <HashLink smooth to="/Blog" className="nav-link">
                  {Data[0].nav5}
                </HashLink>
              </Nav.Link>
              <Nav.Link>
                <HashLink smooth to="" className="nav-link">
                  <BootstrapSwitchButton
                    checked={lang === "en" ? false : true}
                    size="xs"
                    onlabel="ID"
                    offlabel="ENG"
                    onChange={onChange}
                  />
                </HashLink>
              </Nav.Link>
            </Nav>
            <Nav>
              <HashLink smooth to="/#section6">
                <Button className="contact-btn px-4">{Data[0].nav4}</Button>{" "}
              </HashLink>
            </Nav>
          </Navbar.Collapse>
        ) : (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-btn nav-btn-id">
              <Nav.Link>
                <Link to="/" className="nav-link nav-link-indo">
                  {Data[1].nav1}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/AboutUs" className="nav-link nav-link-indo">
                  {Data[1].nav2}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <HashLink smooth to="/#section2" className="nav-link nav-link-indo">
                  {Data[1].nav3}
                </HashLink>
              </Nav.Link>
              <Nav.Link>
                <HashLink smooth to="/Blog" className="nav-link nav-link-indo">
                  {Data[1].nav5}
                </HashLink>
              </Nav.Link>
              <Nav.Link>
                <HashLink smooth to="" className="nav-link">
                  <BootstrapSwitchButton
                    checked={lang === "en" ? false : true}
                    size="xs"
                    onlabel="ID"
                    offlabel="ENG"
                    onChange={onChange}
                  />
                </HashLink>
              </Nav.Link>
            </Nav>
            <Nav>
              <HashLink smooth to="/#section6">
                <Button className="contact-btn px-4">{Data[0].nav4}</Button>{" "}
              </HashLink>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
}

export default BasicExample;
