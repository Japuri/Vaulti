import { Route, Switch } from "wouter";
import { Navigation } from "./components/sections/Navigation";
import { Footer } from "./components/sections/Footer";
import { HomePage } from "./pages/HomePage";
import { SolutionsPage } from "./pages/SolutionsPage";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navigation />
      <main>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/solutions" component={SolutionsPage} />
          <Route path="/about" component={AboutPage} />
          <Route>
            {/* 404 fallback */}
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24">
              <h1 className="text-5xl font-bold text-slate-900 mb-4">404</h1>
              <p className="text-slate-500 mb-8">Page not found.</p>
              <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Back to home
              </a>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
