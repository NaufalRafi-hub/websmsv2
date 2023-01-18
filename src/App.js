// import logo from './logo.svg';
import Home from "./Pages/Home";
import Navigation from "./Component/Navigation";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import Footer from "./Component/Footer";
import { createContext, useState } from "react";
import langContext from "./Context/languageContext";

function App() {
  const [lang, setLang] = useState("en");
  const value = { lang, setLang };

  return (
    <div className="App">
      <langContext.Provider value={value}>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />

            {/* <Route component={Error} /> */}
          </Switch>
          {/* <Floatbtn /> */}
          <Footer />

          {/* <Home /> */}
        </BrowserRouter>
      </langContext.Provider>
    </div>
  );
}

export default App;
