import { useState } from "react";
import { About } from "./Components/About";
import { Banner } from "./Components/Banner";
import { Contact } from "./Components/Contact";
import { Diets } from "./Components/Diets";
import { Footer } from "./Components/Footer";
import { PreferedDietType } from "./Components/Form";
import { Gallery } from "./Components/Gallery";
import { Info } from "./Components/Info";
import { Navigation } from "./Components/Navigation";
import { Offer } from "./Components/Offer";
import { Separator } from "./Components/Separator";

function App() {
  const [preferedDiet, setPreferedDiet] = useState<PreferedDietType>();
  return (
    <>
      <Navigation />
      <Banner />
      <About />
      <Separator />
      <Diets />
      <Offer setPreferedDiet={setPreferedDiet} />
      <Gallery />
      <Info />
      <Contact preferedDiet={preferedDiet} />
      <Footer />
    </>
  );
}

export default App;
