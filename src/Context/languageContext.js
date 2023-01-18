import { createContext } from "react";

const langContext = createContext({
  lang: "en",
  setLang: () => {},
});

export default langContext;
