import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";
import { Contact } from "./components/Contact";
import './index.css'
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

function App() {
  
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-900">
      <Analytics />
     <Hero/>
     <div className="mt-10 ">
     <Projects/>
     <Skills/>
     <Contact/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
