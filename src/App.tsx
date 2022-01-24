import React from "react";
import { ReactFileInputCustom } from "react-file-input-custom";
import { About } from "./Components/About";
import { Banner } from "./Components/Banner";
import { Contact } from "./Components/Contact";
import { Diets } from "./Components/Diets";
import { Footer } from "./Components/Footer";
import { Gallery } from "./Components/Gallery";
import { Info } from "./Components/Info";
import { Navigation } from "./Components/Navigation";
import { Offer } from "./Components/Offer";
import { Separator } from "./Components/Separator";

function App() {
  return (
    <>
      <Navigation />
      <Banner />
      <About />
      <Separator />
      <Diets />
      <Offer />
      <Gallery />
      <Info />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
