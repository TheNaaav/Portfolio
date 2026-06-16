import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { AIDirection } from "./components/AIDirection";
import './index.css'
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { Header } from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
     <Analytics />
     <Header />
     <Hero/>
     <Projects/>
     <Experience/>
     <AIDirection/>
     <Skills/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
