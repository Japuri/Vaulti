import { Navigation } from "./components/sections/Navigation";
import { Hero } from "./components/sections/Hero";
import { PrivacyVisual } from "./components/sections/PrivacyVisual";
import { ParadigmShift } from "./components/sections/ParadigmShift";
import { Pipeline } from "./components/sections/Pipeline";
import { Pricing } from "./components/sections/Pricing";
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
        <Pipeline />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
