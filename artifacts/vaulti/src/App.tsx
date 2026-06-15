import { Navigation } from "./components/sections/Navigation";
import { Hero } from "./components/sections/Hero";
import { BlindNode } from "./components/sections/BlindNode";
import { ParadigmShift } from "./components/sections/ParadigmShift";
import { Pipeline } from "./components/sections/Pipeline";
import { Pricing } from "./components/sections/Pricing";
import { FAQ } from "./components/sections/FAQ";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans" style={{ scrollBehavior: "smooth" }}>
      <Navigation />
      <main>
        <Hero />
        <BlindNode />
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
