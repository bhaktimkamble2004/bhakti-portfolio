import { useEffect, useState } from "react";

import "./PortfolioMap.css";

import portfolioMapBackground from "../assets/PortfolioMap_background.png";

import mePhoto from "../assets/Me_photo.jpeg";

import degreePhoto from "../assets/Degree.png";

import degreeParentsPhoto from "../assets/Degree_parents.png";

import mangroveCertificate from "../assets/Mangrove_Trust.png";

import islCertificate from "../assets/ISL.png";

/* =========================================================

   CUSTOM ILLUSTRATED ICONS

========================================================= */

const MapIcon = ({ type }) => {

  /* ABOUT ME - GIRL / PROFILE */

  if (type === "about") {

    return (

      <svg

        className="map-graphic-icon"

        viewBox="0 0 100 100"

        aria-hidden="true"

      >

        <path

          d="M34 35

             C30 21 38 11 51 11

             C64 11 71 22 68 37

             C66 47 61 52 56 55

             L40 53

             C35 48 33 42 34 35Z"

          className="icon-fill-dark"

        />

        <circle

          cx="35"

          cy="20"

          r="9"

          className="icon-fill-dark"

        />

        <path

          d="M42 28

             C47 24 55 24 61 28

             L60 37

             C59 44 55 48 50 48

             C45 48 41 43 41 37Z"

          className="icon-fill-skin"

        />

        <path

          d="M45 45 L45 56 L56 56 L55 45Z"

          className="icon-fill-skin"

        />

        <path

          d="M33 78

             C34 64 41 56 50 55

             C61 55 68 63 70 78

             L70 90

             L31 90Z"

          className="icon-fill-main"

        />

        <path

          d="M28 59

             C21 61 18 69 18 80

             L18 90

             L34 90

             L34 68

             C34 63 32 60 28 59Z"

          className="icon-fill-secondary"

        />

        <path

          d="M31 63 C35 58 39 56 44 56"

          className="icon-stroke"

        />

        <path

          d="M38 23 C44 15 57 15 64 25"

          className="icon-stroke-light"

        />

        <path

          d="M37 30 C35 40 39 49 44 53"

          className="icon-stroke-light"

        />

        <path

          d="M58 58 C66 60 72 68 75 79"

          className="icon-stroke"

        />

      </svg>

    );

  }

  /* EXPERIENCE - BRIEFCASE */

  if (type === "experience") {

    return (

      <svg

        className="map-graphic-icon"

        viewBox="0 0 100 100"

        aria-hidden="true"

      >

        <path

          d="M37 35

             V27

             C37 22 41 19 46 19

             H55

             C60 19 63 22 63 27

             V35"

          className="icon-stroke-thick"

        />

        <rect

          x="16"

          y="34"

          width="68"

          height="47"

          rx="8"

          className="icon-fill-main"

        />

        <path

          d="M17 48 C34 58 66 58 83 48"

          className="icon-stroke-light"

        />

        <rect

          x="45"

          y="51"

          width="11"

          height="9"

          rx="2"

          className="icon-fill-gold"

        />

        <path d="M24 72 H76" className="icon-stroke-light" />

        <path d="M23 40 H31" className="icon-stroke-light" />

        <path d="M69 40 H77" className="icon-stroke-light" />

      </svg>

    );

  }

  /* PROJECTS - FOLDER + MAP PIN */

  if (type === "projects") {

    return (

      <svg

        className="map-graphic-icon"

        viewBox="0 0 100 100"

        aria-hidden="true"

      >

        <path

          d="M17 28 H40 L47 34 H80 V72 H17Z"

          className="icon-fill-secondary"

        />

        <path

          d="M55 24 H70 L78 32 V49 H55Z"

          className="icon-fill-paper"

        />

        <path d="M69 24 V33 H78" className="icon-stroke-small" />

        <path d="M60 37 H72" className="icon-stroke-small" />

        <path d="M60 42 H70" className="icon-stroke-small" />

        <path

          d="M14 39 H43 L49 44 H85 L78 80 H20Z"

          className="icon-fill-main"

        />

        <path

          d="M54 51

             C46 51 41 57 41 64

             C41 73 54 83 54 83

             C54 83 67 73 67 64

             C67 57 62 51 54 51Z"

          className="icon-fill-gold"

        />

        <circle

          cx="54"

          cy="63"

          r="4.5"

          className="icon-fill-paper"

        />

      </svg>

    );

  }

  /* SKILLS - WRENCH + PENCIL */

  if (type === "skills") {

    return (

      <svg

        className="map-graphic-icon"

        viewBox="0 0 100 100"

        aria-hidden="true"

      >

        <path

          d="M27 17

             C20 25 20 36 27 43

             L55 71

             L69 57

             L42 30

             C45 21 40 15 32 12

             L31 24

             L23 29

             L15 21

             C16 19 20 16 27 17Z"

          className="icon-fill-main"

        />

        <circle

          cx="62"

          cy="64"

          r="4.5"

          className="icon-fill-paper"

        />

        <path

          d="M28 74 L66 36 L78 48 L40 85Z"

          className="icon-fill-gold"

        />

        <path

          d="M66 36 L75 27 L85 37 L78 48Z"

          className="icon-fill-dark"

        />

        <path

          d="M28 74 L24 89 L40 85Z"

          className="icon-fill-paper"

        />

        <path

          d="M27 84 L24 89 L30 87Z"

          className="icon-fill-dark"

        />

        <path

          d="M34 76 L40 82"

          className="icon-stroke-small"

        />

      </svg>

    );

  }

  /* EDUCATION - GRADUATION CAP */

  if (type === "education") {

    return (

      <svg

        className="map-graphic-icon"

        viewBox="0 0 100 100"

        aria-hidden="true"

      >

        <path

          d="M10 40 L50 20 L90 40 L50 61Z"

          className="icon-fill-dark"

        />

        <path

          d="M28 51

             V65

             C37 76 62 76 72 65

             V51

             L50 62Z"

          className="icon-fill-main"

        />

        <path

          d="M27 40 L50 29 L73 40 L50 52Z"

          className="icon-fill-secondary"

        />

        <path

          d="M88 40 V65"

          className="icon-stroke-gold"

        />

        <circle

          cx="88"

          cy="68"

          r="4"

          className="icon-fill-gold"

        />

        <path

          d="M85 71 L82 82"

          className="icon-stroke-gold"

        />

        <path

          d="M91 71 L94 82"

          className="icon-stroke-gold"

        />

      </svg>

    );

  }

  /* CONTACT - SPEECH BUBBLES + LEAF */

  if (type === "contact") {

    return (

      <svg

        className="map-graphic-icon"

        viewBox="0 0 100 100"

        aria-hidden="true"

      >

        <path

          d="M43 28

             C43 18 52 12 64 12

             C77 12 86 20 86 31

             C86 42 77 50 64 50

             C61 50 58 50 55 49

             L45 57

             L47 45

             C44 41 43 35 43 28Z"

          className="icon-fill-gold"

        />

        <path

          d="M14 46

             C14 30 28 20 45 20

             C63 20 76 31 76 46

             C76 62 62 73 45 73

             C40 73 36 72 32 70

             L19 82

             L22 64

             C17 59 14 53 14 46Z"

          className="icon-fill-main"

        />

        <path

          d="M39 55

             C42 40 54 33 67 34

             C64 48 55 58 39 59Z"

          className="icon-fill-secondary"

        />

        <path

          d="M40 58 C47 50 55 43 64 38"

          className="icon-stroke"

        />

        <circle cx="29" cy="46" r="2.5" className="icon-fill-paper" />

        <circle cx="37" cy="46" r="2.5" className="icon-fill-paper" />

      </svg>

    );

  }

  return null;

};

/* =========================================================

   PORTFOLIO MAP

========================================================= */

function PortfolioMap({ onHome }) {

  const [activeSection, setActiveSection] = useState(null);

  const [graduationSlide, setGraduationSlide] = useState(0);

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const graduationPhotos = [

    {

      image: degreePhoto,

      alt: "Bhakti Kamble B.Sc. Botany degree",

      title: "A Milestone I Worked For",

      label: "MY GRADUATION",

    },

    {

      image: degreeParentsPhoto,

      alt: "Bhakti Kamble's parents receiving her degree",

      title: "A Proud Moment Shared With My Parents",

      label: "A PROUD FAMILY MOMENT",

    },

  ];

  const nextGraduationSlide = () => {

    setGraduationSlide((current) =>

      current === graduationPhotos.length - 1 ? 0 : current + 1

    );

  };

  const previousGraduationSlide = () => {

    setGraduationSlide((current) =>

      current === 0 ? graduationPhotos.length - 1 : current - 1

    );

  };

  const sections = [

    {

      id: "about",

      number: "01",

      title: "About Me",

      subtitle: "Who I Am",

      icon: "about",

      className: "point-about",

    },

    {

      id: "experience",

      number: "02",

      title: "Experience",

      subtitle: "My Journey",

      icon: "experience",

      className: "point-experience",

    },

    {

      id: "projects",

      number: "03",

      title: "Projects",

      subtitle: "Selected Work",

      icon: "projects",

      className: "point-projects",

    },

    {

      id: "skills",

      number: "04",

      title: "Skills",

      subtitle: "Tools & Technology",

      icon: "skills",

      className: "point-skills",

    },

    {

      id: "education",

      number: "05",

      title: "Education",

      subtitle: "Academic Path",

      icon: "education",

      className: "point-education",

    },

    {

      id: "contact",

      number: "06",

      title: "Contact",

      subtitle: "Let's Connect",

      icon: "contact",

      className: "point-contact",

    },

  ];

  const closePopup = () => {

    setSelectedCertificate(null);

    setSelectedImage(null);

    setActiveSection(null);

  };

  useEffect(() => {

    const handleEscape = (event) => {

      if (event.key === "Escape") {

        if (selectedImage) {

          setSelectedImage(null);

          return;

        }

        if (selectedCertificate) {

          setSelectedCertificate(null);

          return;

        }

        closePopup();

      }

    };

    window.addEventListener("keydown", handleEscape);

    return () => {

      window.removeEventListener("keydown", handleEscape);

    };

  }, [selectedCertificate, selectedImage]);

  return (

  <main

    className="portfolio-map-page"

    style={{

      backgroundImage: `

        linear-gradient(

          rgba(250, 252, 246, 0.68),

          rgba(250, 252, 246, 0.68)

        ),

        url(${portfolioMapBackground})

      `,

    }}

  >

      {/* BACKGROUND */}

      <div className="portfolio-grid" />

      <div className="portfolio-contour contour-map-one" />

      <div className="portfolio-contour contour-map-two" />

      <div className="portfolio-contour contour-map-three" />

      <div className="portfolio-contour contour-map-four" />

      {/* HEADER */}

     <header className="portfolio-map-header">

  <button

    type="button"

    className="portfolio-logo"

    onClick={onHome}

    aria-label="Back to home"

  >

    bhakti<span>.dev</span>

  </button>

</header>

      {/* TITLE */}

      <section className="portfolio-map-intro">

        <p className="map-eyebrow">

          INTERACTIVE PORTFOLIO

        </p>

        <h1>

          Explore My <span>World.</span>

        </h1>

        <div className="title-brush" />

        <p className="map-intro-description">

          Navigate through each location to discover my journey

          through geospatial technology, data, projects and creativity.

        </p>

      </section>

      {/* CONNECTION LINES */}

      <svg

        className="portfolio-map-lines"

        viewBox="0 0 1200 650"

        preserveAspectRatio="none"

        aria-hidden="true"

      >

        <defs>

          <linearGradient

            id="mapLineGradient"

            x1="0%"

            y1="0%"

            x2="100%"

            y2="100%"

          >

            <stop offset="0%" stopColor="#78917b" />

            <stop offset="50%" stopColor="#477557" />

            <stop offset="100%" stopColor="#21462f" />

          </linearGradient>

        </defs>

        <path

          className="map-route"

          d="M190 170 C310 120, 390 180, 535 280"

        />

        <path

          className="map-route"

          d="M1010 175 C870 110, 730 175, 535 280"

        />

        <path

          className="map-route"

          d="M535 280 C430 330, 350 385, 275 455"

        />

        <path

          className="map-route"

          d="M535 280 C675 320, 790 375, 920 440"

        />

        <path

          className="map-route"

          d="M275 455 C410 540, 515 550, 600 565"

        />

        <path

          className="map-route"

          d="M920 440 C810 520, 700 550, 600 565"

        />

      </svg>

      {/* LOCATIONS */}

      <section className="portfolio-locations">

        {sections.map((section) => (

          <button

            key={section.id}

            type="button"

            className={`portfolio-location ${section.className}`}

            onClick={() => {

              setActiveSection(section);

              if (section.id === "education") setGraduationSlide(0);

            }}

          >

            <span className="location-pulse" />

            <span className="location-ring">

              <span className="location-center">

                <MapIcon type={section.icon} />

              </span>

            </span>

            <span className="location-content">

              <span className="location-number">

                {section.number}

              </span>

              <span className="location-title">

                {section.title}

              </span>

              <span className="location-subtitle">

                {section.subtitle}

              </span>

            </span>

          </button>

        ))}

      </section>

     {/* BOTTOM */}

<div className="portfolio-map-bottom">

  <div className="map-status">

    <span className="status-dot" />

    <span>AVAILABLE FOR EXPLORATION</span>

  </div>

  <div className="map-location-label">

    GEOSPATIAL • DATA • TECHNOLOGY

  </div>

</div>

      {/* =====================================================

          POPUP

      ===================================================== */}

      {activeSection && (

        <div

          className="portfolio-popup-overlay"

          onClick={closePopup}

        >

          <article

            className="portfolio-popup"

            onClick={(event) => event.stopPropagation()}

          >

            <span className="popup-large-number">

              {activeSection.number}

            </span>

            <button

              type="button"

              className="portfolio-popup-close"

              onClick={closePopup}

              aria-label="Close popup"

            >

              ×

            </button>

            {/* POPUP HEADER */}

            <header className="portfolio-popup-header">

              <div className="popup-location-icon">

                <MapIcon type={activeSection.icon} />

              </div>

              <div>

                <p>

                  LOCATION {activeSection.number}

                </p>

                <h2>{activeSection.title}</h2>

              </div>

            </header>

            <div className="popup-divider" />

            {/* =================================================

                ABOUT ME

            ================================================= */}

            {activeSection.id === "about" && (

              <div className="popup-body">

                <div className="about-profile-layout">

                  <div className="about-photo-wrapper">

                    <div className="about-photo-decoration" />

                    <img

                      src={mePhoto}

                      alt="Bhakti Kamble"

                      className="about-profile-photo"

                    />

                    <span className="about-photo-label">

                      GEOSPATIAL EXPLORER

                    </span>

                  </div>

                  <div className="about-profile-content">

                    <p className="popup-introduction">

                      Hello, I'm Bhakti

                    </p>

                    <h3>

                      Exploring the world through maps,

                      data and technology.

                    </h3>

                    <p>

                      I am a Geospatial Science student with a

                      strong interest in understanding real-world

                      patterns through maps, spatial data and

                      technology.

                    </p>

                    <p>

                      My work combines GIS, remote sensing,

                      spatial analysis and geospatial programming.

                      I enjoy transforming geographic information

                      into meaningful visual stories that can

                      support analysis and decision-making.

                    </p>

                    <p>

                      I am especially interested in GIS, remote

                      sensing, spatial intelligence and emerging

                      technologies, and I enjoy continuously

                      learning new tools and applying them to

                      real-world problems.

                    </p>

                    <div className="popup-tags">

                      <span>GIS</span>

                      <span>Remote Sensing</span>

                      <span>Spatial Analysis</span>

                      <span>Geospatial Programming</span>

                      <span>Data Visualization</span>

                    </div>

                  </div>

                </div>

              </div>

            )}

            {/* =================================================

    EXPERIENCE

\================================================= */}

{activeSection.id === "experience" && (

  <div className="popup-body experience-popup-body">

    <p className="popup-introduction">

      Professional Journey

    </p>

    <h3>

      Learning through real-world geospatial

      and technology experiences.

    </h3>

    <p className="experience-intro-text">

      These experiences gave me opportunities to apply

      geospatial concepts beyond the classroom and develop

      practical skills in environmental mapping, remote

      sensing and space technology.

    </p>

    {/* EXPERIENCE 01 */}

    <div className="experience-showcase">

      <div className="experience-card">

        <div className="experience-number">

          01

        </div>

        <div className="experience-information">

          <span className="experience-date">

            MAY 2025

          </span>

          <h4>

            Geospatial Experience

          </h4>

          <p className="experience-company">

            Conservation Action Trust

          </p>

          <p>

            Worked on mangrove mapping, land-cover change

            detection, CZMP georeferencing and compliance

            analysis across nine coastal sites. This experience

            helped me understand how GIS and spatial analysis

            can be applied to environmental conservation and

            coastal studies.

          </p>

          <div className="experience-tags">

            <span>GIS</span>

            <span>Mangrove Mapping</span>

            <span>Change Detection</span>

            <span>CZMP</span>

          </div>

        </div>

      </div>

      {/* MANGROVE CERTIFICATE */}

      <div className="experience-certificate">

        <div className="certificate-top">

          <div>

            <span className="certificate-eyebrow">

              CERTIFICATE 01

            </span>

            <h5>

              Conservation Action Trust

            </h5>

          </div>

          <span className="certificate-year">

            2025

          </span>

        </div>

        <button

          type="button"

          className="certificate-image-frame certificate-clickable"

          onClick={() => setSelectedCertificate({ image: mangroveCertificate, title: "Conservation Action Trust", type: "Field Experience", alt: "Conservation Action Trust experience certificate" })}

          aria-label="Open Conservation Action Trust certificate"

        >

          <img src={mangroveCertificate} alt="Conservation Action Trust experience certificate" />

          <div className="certificate-image-overlay">

            <span>FIELD EXPERIENCE</span>

          </div>

        </button>

        <p className="certificate-caption">

          A valuable learning experience that allowed me to

          apply geospatial techniques to environmental and

          coastal conservation work.

        </p>

      </div>

    </div>

    {/* EXPERIENCE 02 */}

    <div className="experience-showcase">

      <div className="experience-card">

        <div className="experience-number">

          02

        </div>

        <div className="experience-information">

          <span className="experience-date">

            MAY 2025

          </span>

          <h4>

            Space Technology Training

          </h4>

          <p className="experience-company">

            India Space Lab

          </p>

          <p>

            Received practical exposure to drone technology,

            CanSat and CubeSat systems, remote sensing, GIS and

            rocketry. I also designed a CanSat Ground Control

            Station, worked on PID controller tuning and

            evaluated rocket fin aerodynamics using SimScale.

          </p>

          <div className="experience-tags">

            <span>CanSat</span>

            <span>CubeSat</span>

            <span>Remote Sensing</span>

            <span>Drone Technology</span>

            <span>SimScale</span>

          </div>

        </div>

      </div>

      {/* INDIA SPACE LAB CERTIFICATE */}

      <div className="experience-certificate">

        <div className="certificate-top">

          <div>

            <span className="certificate-eyebrow">

              CERTIFICATE 02

            </span>

            <h5>

              India Space Lab

            </h5>

          </div>

          <span className="certificate-year">

            2025

          </span>

        </div>

        <button

          type="button"

          className="certificate-image-frame certificate-clickable"

          onClick={() => setSelectedCertificate({ image: islCertificate, title: "India Space Lab", type: "Space Technology", alt: "India Space Lab training certificate" })}

          aria-label="Open India Space Lab certificate"

        >

          <img src={islCertificate} alt="India Space Lab training certificate" />

          <div className="certificate-image-overlay">

            <span>SPACE TECHNOLOGY</span>

          </div>

        </button>

        <p className="certificate-caption">

          This training expanded my understanding of space

          technology by combining geospatial concepts with

          drones, satellite systems, CanSat development and

          rocketry.

        </p>

      </div>

    </div>

  </div>

)}

            {/* =================================================

                PROJECTS

            ================================================= */}

            {activeSection.id === "projects" && (

              <div className="popup-body">

                <p className="popup-introduction">Selected Work</p>

                <h3>

                  Projects where geography, data and

                  technology come together.

                </h3>

                <div className="popup-project-grid">

                  <article className="popup-project-card">

                    <span className="project-number">01</span>

                    <p className="project-category">GIS • DATA VISUALIZATION</p>

                    <h4>Global Earthquake Explorer</h4>

                    <p>

                      A geospatial project focused on exploring

                      and visualizing global earthquake data to

                      understand spatial patterns and seismic activity.

                    </p>

                    <a className="project-link" href="https://bhaktimkamble2004.github.io/Earthquake3D-visualization/" target="_blank" rel="noopener noreferrer">

                      <span>View Project</span><strong>↗</strong>

                    </a>

                  </article>

                  <article className="popup-project-card">

                    <span className="project-number">02</span>

                    <p className="project-category">REMOTE SENSING • LULC</p>

                    <h4>LULC Change Detection – Hyderabad</h4>

                    <p>

                      A land use and land cover change detection

                      study examining how the landscape of Hyderabad

                      has changed using geospatial and remote sensing techniques.

                    </p>

                    <a className="project-link" href="https://bhaktimkamble2004.github.io/LULC_hyderabad/" target="_blank" rel="noopener noreferrer">

                      <span>View Project</span><strong>↗</strong>

                    </a>

                  </article>

                  <article className="popup-project-card">

                    <span className="project-number">03</span>

                    <p className="project-category">MODIS • VEGETATION</p>

                    <h4>MODIS Vegetation Dynamics of India</h4>

                    <p>

                      An analysis of vegetation patterns and dynamics

                      across India using MODIS satellite data and

                      geospatial processing techniques.

                    </p>

                    <a className="project-link" href="https://bhaktimkamble2004.github.io/India_MODIS-NDVI/" target="_blank" rel="noopener noreferrer">

                      <span>View Project</span><strong>↗</strong>

                    </a>

                  </article>

                  <article className="popup-project-card">

                    <span className="project-number">04</span>

                    <p className="project-category">3D GIS • DASHBOARD</p>

                    <h4>Bharati Vidyapeeth Campus 3D Geospatial Dashboard</h4>

                    <p>

                      A 3D geospatial dashboard developed to represent

                      and explore the Bharati Vidyapeeth campus through

                      interactive spatial visualization.

                    </p>

                    <a className="project-link" href="https://www.arcgis.com/apps/dashboards/5e678ea055e942f0956195b32b649972#" target="_blank" rel="noopener noreferrer">

                      <span>View Dashboard</span><strong>↗</strong>

                    </a>

                  </article>

                  <article className="popup-project-card project-wide">

                    <span className="project-number">05</span>

                    <p className="project-category">SPATIAL ANALYSIS • SUITABILITY</p>

                    <h4>Geospatial Assessment of Heat Flow and Land Suitability – NH-48 Transit Corridor</h4>

                    <p>

                      A geospatial assessment focused on heat flow and

                      land suitability along the NH-48 transit corridor

                      using spatial analysis techniques.

                    </p>

                    <a className="project-link" href="https://bvpit-my.sharepoint.com/:p:/g/personal/bhakti_kamble-extieer_bharatividyapeeth_edu/IQDvd__2HrzSTJw8D5p6eLCCAfbjQkLIr3-2J5YOoEdpbtI?rtime=AH0sYQgf30g" target="_blank" rel="noopener noreferrer">

                      <span>View Project</span><strong>↗</strong>

                    </a>

                  </article>

                </div>

              </div>

            )}

            {/* =================================================

                SKILLS

            ================================================= */}

            {activeSection.id === "skills" && (

              <div className="popup-body">

                <p className="popup-introduction">

                  My Toolkit

                </p>

                <h3>

                  Technologies and tools I use to explore

                  spatial data.

                </h3>

                <div className="skills-category">

                  <p className="skills-category-title">

                    Geospatial & Analysis

                  </p>

                  <div className="skills-map-grid">

                    <div>

                      <span>01</span>

                      <p>GIS</p>

                    </div>

                    <div>

                      <span>02</span>

                      <p>Remote Sensing</p>

                    </div>

                    <div>

                      <span>03</span>

                      <p>Spatial Analysis</p>

                    </div>

                    <div>

                      <span>04</span>

                      <p>Geospatial Programming</p>

                    </div>

                  </div>

                </div>

                <div className="skills-category">

                  <p className="skills-category-title">

                    GIS & Mapping Tools

                  </p>

                  <div className="skills-map-grid">

                    <div>

                      <span>05</span>

                      <p>ArcGIS Pro</p>

                    </div>

                    <div>

                      <span>06</span>

                      <p>ArcGIS Online</p>

                    </div>

                    <div>

                      <span>07</span>

                      <p>QGIS</p>

                    </div>

                    <div>

                      <span>08</span>

                      <p>Google Earth Engine</p>

                    </div>

                  </div>

                </div>

                <div className="skills-category">

                  <p className="skills-category-title">

                    Programming & Development

                  </p>

                  <div className="skills-map-grid">

                    <div>

                      <span>09</span>

                      <p>Python</p>

                    </div>

                    <div>

                      <span>10</span>

                      <p>Java</p>

                    </div>

                    <div>

                      <span>11</span>

                      <p>JavaScript</p>

                    </div>

                    <div>

                      <span>12</span>

                      <p>HTML</p>

                    </div>

                    <div>

                      <span>13</span>

                      <p>Git</p>

                    </div>

                    <div>

                      <span>14</span>

                      <p>VS Code</p>

                    </div>

                  </div>

                </div>

                <div className="skills-category">

                  <p className="skills-category-title">

                    Personal Strengths

                  </p>

                  <div className="popup-tags">

                    <span>Self-Motivated</span>

                    <span>Teamwork</span>

                    <span>Quick Learner</span>

                    <span>Communication</span>

                  </div>

                </div>

              </div>

            )}

            {/* =================================================

                EDUCATION

            ================================================= */}

{/* =================================================

    EDUCATION

\================================================= */}

{activeSection.id === "education" && (

  <div className="popup-body">

    <p className="popup-introduction">

      Academic Journey

    </p>

    <h3>

      Building my foundation in science,

      geography and technology.

    </h3>

    <p>

      My academic journey started with life sciences

      and has grown into geospatial science, allowing

      me to combine environmental understanding with

      modern spatial technology.

    </p>

    <div className="education-timeline">

      {/* M.SC. GEOINFORMATICS */}

      <div className="education-card">

        <span className="education-year">

          2025 — 2027

        </span>

        <span className="education-status">

          PURSUING

        </span>

        <h4>

          M.Sc. Geoinformatics

        </h4>

        <p className="education-place">

          Bharati Vidyapeeth Institute of Environment

          Education and Research, Pune

        </p>

        <p>

          Developing knowledge and practical skills

          in GIS, remote sensing, spatial analysis,

          geospatial technologies and geographic

          data applications.

        </p>

      </div>

      {/* B.SC. BOTANY */}

      <div className="education-card">

        <span className="education-year">

          2022 — 2025

        </span>

        <span className="education-status completed">

          COMPLETED

        </span>

        <h4>

          B.Sc. Botany

        </h4>

        <p className="education-place">

          Ramnarain Ruia College, Mumbai

        </p>

        <p>

          Built a strong foundation in biological

          and environmental sciences before moving

          into geospatial science and technology.

        </p>

        {/* =============================================

            GRADUATION MEMORIES

        ============================================= */}

        <div className="graduation-section">

          <div className="graduation-heading">

            <div>

              <span className="graduation-eyebrow">

                ACADEMIC MEMORIES

              </span>

              <h5>Graduation Day</h5>

            </div>

            <span className="graduation-year">

              2025

            </span>

          </div>

          <div className="graduation-carousel">

            <figure className="graduation-photo-card">

              <div className="graduation-image">

                <img

                  src={graduationPhotos[graduationSlide].image}

                  alt={graduationPhotos[graduationSlide].title}

                  className="graduation-carousel-image graduation-clickable-image"

                  onClick={() =>

                    setSelectedImage({

                      image: graduationPhotos[graduationSlide].image,

                      title: graduationPhotos[graduationSlide].title,

                      alt: graduationPhotos[graduationSlide].alt,

                    })

                  }

                />

                <span className="graduation-image-number">

                  {String(graduationSlide + 1).padStart(2, "0")} / {String(graduationPhotos.length).padStart(2, "0")}

                </span>

                <button

                  type="button"

                  className="graduation-arrow graduation-prev"

                  onClick={previousGraduationSlide}

                  aria-label="Previous graduation photo"

                >

                  &#8592;

                </button>

                <button

                  type="button"

                  className="graduation-arrow graduation-next"

                  onClick={nextGraduationSlide}

                  aria-label="Next graduation photo"

                >

                  &#8594;

                </button>

              </div>

              <figcaption className="graduation-caption">

                <span>{graduationPhotos[graduationSlide].label}</span>

                <h6>

                  {graduationSlide === 0

                    ? "A Milestone I Worked For"

                    : "A Proud Moment Shared With My Parents"}

                </h6>

                <p>

                  {graduationSlide === 0

                    ? "Completing my B.Sc. Botany at Ramnarain Ruia College marked an important step in my academic journey and gave me the scientific foundation that later led me toward geospatial science."

                    : "I was unable to attend the degree ceremony myself, so my parents received my degree on my behalf. Their presence made this achievement especially meaningful because their support has been an important part of my academic journey."}

                </p>

              </figcaption>

            </figure>

          </div>

          <div className="graduation-dots" aria-label="Graduation photo navigation">

            {graduationPhotos.map((photo, index) => (

              <button

                key={photo.label}

                type="button"

                className={`graduation-dot ${graduationSlide === index ? "active" : ""}`}

                onClick={() => setGraduationSlide(index)}

                aria-label={`Show graduation photo ${index + 1}`}

              />

            ))}

          </div>

          <div className="graduation-story">

            <span className="graduation-story-icon" aria-hidden="true">&#10084;</span>

            <p>

              This graduation memory represents both an academic milestone and the support of my family throughout my undergraduate journey.

            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

)}

         {/* =================================================

    CONTACT

\================================================= */}

{activeSection.id === "contact" && (

  <div className="popup-body">

    <p className="popup-introduction">

      Get In Touch

    </p>

    <h3>

      Let's map ideas into something

      meaningful.

    </h3>

    <p>

      I am interested in opportunities related to

      GIS, remote sensing, spatial analysis,

      geospatial technology and data-driven projects.

      Feel free to connect with me.

    </p>

    <div className="contact-map-links">

      {/* EMAIL */}

      <a href="mailto:bhaktimkamble2004@gmail.com">

        <div>

          <span>01</span>

          <p>Email</p>

          <small>

            bhaktimkamble2004@gmail.com

          </small>

        </div>

        <strong>↗</strong>

      </a>

      {/* PHONE */}

      <a href="tel:+919321563193">

        <div>

          <span>02</span>

          <p>Phone</p>

          <small>

            +91 9321563193

          </small>

        </div>

        <strong>↗</strong>

      </a>

      {/* GITHUB */}

      <a

        href="https://github.com/bhaktimkamble2004"

        target="_blank"

        rel="noopener noreferrer"

      >

        <div>

          <span>03</span>

          <p>GitHub</p>

          <small>

            bhaktimkamble2004

          </small>

        </div>

        <strong>↗</strong>

      </a>

      {/* LINKEDIN */}

      <a

        href="https://www.linkedin.com/in/bhakti-kamble-190a86369"

        target="_blank"

        rel="noopener noreferrer"

      >

        <div>

          <span>04</span>

          <p>LinkedIn</p>

          <small>

            Bhakti Kamble

          </small>

        </div>

        <strong>↗</strong>

      </a>

    </div>

  </div>

)}

            {/* FOOTER */}

            <footer className="portfolio-popup-footer">

              <span>BHAKTI.DEV</span>

              <span>

                {activeSection.number} / 06

              </span>

            </footer>

          </article>

        </div>

      )}

      {/* FULL-SCREEN GRADUATION IMAGE PREVIEW */}

      {selectedImage && (

        <div className="certificate-fullscreen-overlay" onClick={() => setSelectedImage(null)}>

          <div className="certificate-fullscreen-container" onClick={(event) => event.stopPropagation()}>

            <button
              type="button"
              className="certificate-fullscreen-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close graduation image preview"
            >
              ×
            </button>

            <div className="certificate-fullscreen-header">

              <span>GRADUATION MEMORY</span>

              <h3>{graduationPhotos[graduationSlide].title}</h3>

            </div>

            <div className="certificate-fullscreen-image-wrapper">

              <button
                type="button"
                className="graduation-fullscreen-arrow graduation-fullscreen-prev"
                onClick={previousGraduationSlide}
                aria-label="Previous graduation image"
              >
                ←
              </button>

              <img
                src={graduationPhotos[graduationSlide].image}
                alt={graduationPhotos[graduationSlide].alt}
                className="certificate-fullscreen-image"
              />

              <span className="graduation-fullscreen-counter">
                {String(graduationSlide + 1).padStart(2, "0")} /{" "}
                {String(graduationPhotos.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                className="graduation-fullscreen-arrow graduation-fullscreen-next"
                onClick={nextGraduationSlide}
                aria-label="Next graduation image"
              >
                →
              </button>

            </div>

          </div>

        </div>

      )}

      {/* FULL-SCREEN CERTIFICATE PREVIEW */}

      {selectedCertificate && (

        <div className="certificate-fullscreen-overlay" onClick={() => setSelectedCertificate(null)}>

          <div className="certificate-fullscreen-container" onClick={(event) => event.stopPropagation()}>

            <button type="button" className="certificate-fullscreen-close" onClick={() => setSelectedCertificate(null)} aria-label="Close certificate preview">×</button>

            <div className="certificate-fullscreen-header">

              <span>{selectedCertificate.type}</span>

              <h3>{selectedCertificate.title}</h3>

            </div>

            <div className="certificate-fullscreen-image-wrapper">

              <img src={selectedCertificate.image} alt={selectedCertificate.alt} className="certificate-fullscreen-image" />

            </div>

            <p className="certificate-fullscreen-hint">Click outside, press × or press Esc to close</p>

          </div>

        </div>

      )}

    </main>

  );

}

export default PortfolioMap;
