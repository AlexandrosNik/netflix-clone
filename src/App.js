import React from "react";
import "./App.css";
import Rows from "./components/Rows/Rows";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Rows />
    </div>
  );
}

export default App;
