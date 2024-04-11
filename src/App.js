import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { Header } from "./component/Header";
import { AllRouter } from "./routes/AllRouter";

const App = () => {
  return (
    <>
      <Header />
      <AllRouter />
    </>
  );
};

export default App;
