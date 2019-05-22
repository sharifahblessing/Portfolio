import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PageView from "./Components/PageView/PageView";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <PageView />
      <Footer />
    </div>
  );
}

export default App;
