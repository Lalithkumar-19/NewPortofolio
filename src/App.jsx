import "./App.css";
import Badges from "./Components/Badges";
import Certifications from "./Components/Certifications";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Hero from "./Components/Hero";
import Messageme from "./Components/Messageme";
import Navbar from "./Components/Navbar";
import Portofolio from "./Components/Portofolio";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Education />
        <Skills />
        <Services />
        <Certifications />
        <Badges />
        <Portofolio />
        <Contact />
        <Messageme />
      </div>
    </>
  );
}

export default App;
