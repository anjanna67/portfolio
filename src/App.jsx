import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Education from "./components/Education";
import Certifications from "./components/certification";
import Resume from "./components/Resume";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.css";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Resume/>
            <Projects />
            <Certifications />
            <Education />
            <Contact />
            <Footer />
        </>
    );
}

export default App;