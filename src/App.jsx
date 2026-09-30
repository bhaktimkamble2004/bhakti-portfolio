import { useState } from "react";

import IntroLoader from "./components/IntroLoader";
import HeroIntro from "./components/HeroIntro";
import PortfolioMap from "./components/PortfolioMap";

import "./App.css";

function App() {
  // Controls which page is currently visible
  const [page, setPage] = useState("loader");

  // Used to restart the HeroIntro animation
  const [heroKey, setHeroKey] = useState(0);

  return (
    <>
      {/* INTRO LOADER */}
      {page === "loader" && (
        <IntroLoader
          onComplete={() => setPage("hero")}
        />
      )}

      {/* HERO INTRO */}
      {page === "hero" && (
        <HeroIntro
          key={heroKey}
          onExplore={() => setPage("map")}
          onRestart={() =>
            setHeroKey((currentKey) => currentKey + 1)
          }
        />
      )}

      {/* PORTFOLIO MAP */}
      {page === "map" && (
        <PortfolioMap
          onHome={() => setPage("hero")}
        />
      )}
    </>
  );
}

export default App;