import { Navigation } from "./components/sections/Navigation";
import { Hero } from "./components/sections/Hero";
import { PrivacyVisual } from "./components/sections/PrivacyVisual";
import { ParadigmShift } from "./components/sections/ParadigmShift";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { Solutions } from "./components/sections/Solutions";
import { Pipeline } from "./components/sections/Pipeline";
import { Pricing } from "./components/sections/Pricing";
import { AboutUs } from "./components/sections/AboutUs";
import { FAQ } from "./components/sections/FAQ";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navigation />
      <main>
        <Hero />
        <PrivacyVisual />
        <ParadigmShift />
        <WhyChooseUs />
        <Solutions />
        <Pipeline />
        <Pricing />
        <AboutUs />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
