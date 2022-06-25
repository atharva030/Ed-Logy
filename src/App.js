import React from "react";
import "./App.css";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
         <Section />
           <Cards/>
             <Team />
               <Footer />
    </>
  );
}

export default App;
