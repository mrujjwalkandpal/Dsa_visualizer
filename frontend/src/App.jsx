import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import VisualizerCard from "./components/visualizercard/VisualizerCard";
import Footer from "./components/footer/Footer";
import BubbleSort from "./pages/sorting/BubbleSort";
import InsertionSort from "./pages/sorting/InsertionSort";
import LandingSort from "./pages/sorting/landingSort";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home route keeps the landing page content together */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <VisualizerCard />
            </>
          }
        />

        {/* Sorting first opens a landing page so users can choose an algorithm */}
        <Route path="/sorting" element={<LandingSort />} />

        {/* About page explains the PBL context and current phase progress */}
        <Route path="/about" element={<About />} />

        {/* Individual sorting routes live under the sorting section */}
        <Route path="/sorting/bubble-sort" element={<BubbleSort />} />
        <Route path="/sorting/insertion-sort" element={<InsertionSort />} />

        {/* Old Bubble Sort URL still works and forwards to the new sorting path */}
        <Route
          path="/bubble-sort"
          element={<Navigate to="/sorting/bubble-sort" replace />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
