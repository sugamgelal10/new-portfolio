import About from "./components/about";
import Contact from "./components/contact";
import Experiences from "./components/experinces";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Project from "./components/projects";
import Skills from "./components/skill";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      {/* <Experiences/> */}
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
