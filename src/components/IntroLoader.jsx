import { useEffect, useState } from "react";
import "./IntroLoader.css";

function IntroLoader({ onComplete }) {
  // 1. STATES
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [leaving, setLeaving] = useState(false);

  // 2. LOADING 0% → 100%
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((previousProgress) => {
        if (previousProgress >= 100) {
          clearInterval(interval);
          return 100;
        }

        const increase = Math.floor(Math.random() * 4) + 1;

        return Math.min(
          previousProgress + increase,
          100
        );
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  // 3. WHEN 100% IS REACHED → SHOW WELCOME
  useEffect(() => {
    if (progress === 100) {
      const welcomeTimer = setTimeout(() => {
        setLoaded(true);
      }, 250);

      return () => clearTimeout(welcomeTimer);
    }
  }, [progress]);

  // 4. OPEN HERO PAGE
  const handleEnter = () => {
    if (!loaded || leaving) return;

    setLeaving(true);

    setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 700);
  };

  // 5. AUTOMATICALLY CONTINUE AFTER WELCOME
  useEffect(() => {
    if (!loaded) return;

    const enterTimer = setTimeout(() => {
      handleEnter();
    }, 1800);

    return () => clearTimeout(enterTimer);
  }, [loaded]);

  // 6. JSX
  return (
    <div
      className={`intro-loader ${
        leaving ? "intro-leaving" : ""
      }`}
    >
      {/* LOGO */}
      <div className="intro-logo">
        bhakti<span>.dev</span>
      </div>

      {/* TOP RIGHT SYMBOL */}
      <div className="geo-symbol">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <i></i>
      </div>

      {/* MOVING TEXT */}
      <div className="marquee-container">
        <div className="marquee-track">
          <span>GEOSPATIAL ANALYST</span>
          <b>•</b>

          <span>GEOSPATIAL ANALYST</span>
          <b>•</b>

          <span>GEOSPATIAL ANALYST</span>
          <b>•</b>

          <span>GEOSPATIAL ANALYST</span>
          <b>•</b>
        </div>
      </div>

      {/* LOADING / WELCOME BUTTON */}
      <button
        type="button"
        className={`loader-button ${
          loaded ? "completed" : ""
        }`}
        onClick={handleEnter}
        disabled={!loaded || leaving}
      >
        {!loaded ? (
          <>
            <span className="loading-title">
              LOADING
            </span>

            <span className="loading-number">
              {progress}%
            </span>

            <span className="loading-square"></span>
          </>
        ) : (
          <>
            <span className="welcome-text">
              WELCOME
            </span>

            <span className="welcome-arrow">
              →
            </span>
          </>
        )}

        <span
          className="progress-line"
          style={{
            width: `${progress}%`,
          }}
        ></span>
      </button>

      {/* COORDINATES */}
      <div className="intro-coordinates">
        <span>19.0760° N</span>
        <span>72.8777° E</span>
      </div>
    </div>
  );
}

export default IntroLoader;