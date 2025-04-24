import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";
import { Contact } from "./components/Contact";
import './index.css'
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { Header } from "./components/Header";

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-lg shadow-lg">
     <Analytics />
     <Header />
     <Hero/>
     <div className="mt-10">
     <Projects/>
     <Skills/>
     <Contact/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
