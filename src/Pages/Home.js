import React, { useEffect } from "react";
import "../App.css";
import Header from "../Component/Headers";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useParams } from "react-router-dom";
// import { useState } from "react";
import { useContext } from "react";
import langContext from "../Context/languageContext";
import SectionQt from "../Component/SectionQt";
import Section1 from "../Component/Section1";
import Section4abt from "../Component/Section4abt";
import SectionProduct from "../Component/SectionProduct/OurWorkComp";



// import SectionIg from "../Components/SectionIg";

const Home = () => {
  const { lang, setLang } = useContext(langContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home">
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      /> */}
      <header className="App-header">
        <Header lang={lang} />
      </header>
      <SectionQt />
      <Section1 />
      <SectionProduct />
      <Section4abt />
    </div>
  );
};

export default Home;
