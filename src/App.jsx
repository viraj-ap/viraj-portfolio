import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Experience from "./Components/Experience";
import { Projects } from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
