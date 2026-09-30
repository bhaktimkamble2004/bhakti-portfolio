import { useEffect, useState } from "react";
import "./HeroIntro.css";

import background from "../assets/background.png";
import girlFront from "../assets/bhakti-front.png";
import girlWave from "../assets/bhakti-wave.png";
import girlIpad from "../assets/bhakti-ipad.png";

import earth from "../assets/earth.png";
import satellite from "../assets/satellite.png";

function HeroIntro({ onExplore, onRestart }) {
  const [scene, setScene] = useState("enter");

  // INTRO ANIMATION
  useEffect(() => {
    const timers = [];

    timers.push(
      setTimeout(() => setScene("wave"), 1400)
    );

    timers.push(
      setTimeout(() => setScene("name"), 2700)
    );

    timers.push(
      setTimeout(() => setScene("turning"), 5600)
    );

    timers.push(
      setTimeout(() => setScene("ipad"), 6900)
    );

    timers.push(
      setTimeout(() => setScene("portfolio"), 8200)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  // OPEN PORTFOLIO MAP
  const handleExplore = () => {
    if (scene === "clicking") return;

    setScene("clicking");

    setTimeout(() => {
      if (onExplore) {
        onExplore();
      }
    }, 900);
  };

  // RESTART HERO INTRO
  const handleRestart = () => {
    if (onRestart) {
      onRestart();
    }
  };

  // CHARACTER IMAGE
  const getGirlImage = () => {
    if (scene === "enter") {
      return girlFront;
    }

    if (
      scene === "wave" ||
      scene === "name" ||
      scene === "turning"
    ) {
      return girlWave;
    }

    return girlIpad;
  };

  const showFinalContent =
    scene === "portfolio" || scene === "clicking";

  return (
    <section className={`hero-intro scene-${scene}`}>

      {/* BACKGROUND */}
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />

      <div className="geo-grid" />

      {/* CONTOUR DECORATION */}
      <div className="contour contour-one" />
      <div className="contour contour-two" />
      <div className="contour contour-three" />

      {/* BRAND */}
      <button
        type="button"
        className="hero-brand"
        onClick={handleRestart}
        aria-label="Restart portfolio intro"
      >
        bhakti<span>.dev</span>
      </button>

      {/* EARTH SYSTEM */}
      <div className="earth-system">

        <div className="earth-orbit">
          <div className="orbit-dot" />
        </div>

        <img
          src={earth}
          alt="Earth globe"
          className="earth-image"
        />

        <div className="satellite-track">
          <img
            src={satellite}
            alt="Orbiting satellite"
            className="satellite-image"
          />
        </div>

        <div className="earth-coordinate coordinate-one">
          19.0760° N
        </div>

        <div className="earth-coordinate coordinate-two">
          72.8777° E
        </div>

        <div className="earth-label">
          <span className="earth-label-dot" />
          EARTH OBSERVATION
        </div>

      </div>

      {/* NAME ANIMATION */}
      {!showFinalContent && (
        <div className="name-animation">

          <span className="name-bhakti">
            Bhakti
          </span>

          <span className="name-kamble">
            Kamble
          </span>

        </div>
      )}

      {/* GIRL */}
      <div className="girl-stage">

        <img
          key={getGirlImage()}
          src={getGirlImage()}
          alt="Bhakti, geospatial analyst"
          className="girl-character"
        />

        {(scene === "wave" || scene === "name") && (
          <div className="hello-message">

            <span className="hello-arrow">
              ↙
            </span>

            <span className="hello-text">
              Hi!
            </span>

            <span className="hello-heart">
              ♡
            </span>

          </div>
        )}

      </div>

      {/* FINAL WELCOME CONTENT */}
      {showFinalContent && (
        <div className="final-hero-content">

          <span className="final-small-title">
            WELCOME TO
          </span>

          <h1 className="final-title">
            BHAKTI'S
            <span>PORTFOLIO</span>
          </h1>

          <div className="final-divider" />

          <p className="final-description">
            Maps
            <span>•</span>
            Data
            <span>•</span>
            Stories
            <span>•</span>
            A Better Tomorrow
          </p>

          <p className="final-question">
            Explore my journey through
            <br />
            maps, data and technology.
          </p>

          <div className="final-buttons">

            {/* EXPLORE BUTTON */}
            <button
              type="button"
              className="final-explore-button"
              onClick={handleExplore}
              disabled={scene === "clicking"}
            >
              <span>Explore</span>
              <span className="final-button-arrow">
                →
              </span>
            </button>

            {/* RESUME BUTTON */}
            <a
              href={`${import.meta.env.BASE_URL}Resume_BHAKTI_KAMBLE.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Resume</span>
              <span className="resume-arrow">
                ↗
              </span>
            </a>

          </div>

        </div>
      )}

      {/* BOTTOM ROLE */}
      <div className="intro-information">

        <span className="role">
          GEOSPATIAL ANALYST
        </span>

        {!showFinalContent && (
          <span className="tagline">
            Maps
            <i>•</i>
            Data
            <i>•</i>
            Stories
            <i>•</i>
            A Better Tomorrow
          </span>
        )}

      </div>

      {/* TRANSITION TO PORTFOLIO MAP */}
      <div className="explore-transition" />

    </section>
  );
}

export default HeroIntro;