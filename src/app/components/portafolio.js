"use client";

import { useState, useEffect } from 'react';
import { useResponsive, getResponsiveValue } from '../hooks/useResponsive';

export default function Portafolio({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  const [projectImageIndex, setProjectImageIndex] = useState(0);
  const screenSize = useResponsive();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "TEGRITY",
      category: "Web Application",
      description: "Aplicación web desarrollada con Next.js y React, enfocada en rendimiento, experiencia visual interactiva y buenas prácticas de frontend moderno.",
      tech: [
        "Next.js 14",
        "React",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "@splinetool/react-spline",
        "OGL",
        "Next/Image",
        "Tailwind CSS",
        "CSS3",
        "Google Fonts"
      ],
      status: "COMPLETADO",
      year: "2025",
      github: "https://github.com/eliascoca85/TEGRITY",
      deploy: "https://tegrity-soft.me/"
    },
    {
      id: 2,
      title: "GOBIERNO MUNICIPAL DE COLCAPIRHUA",
      category: "Sitio Web Institucional",
      description: "Plataforma institucional para el Gobierno Municipal de Colcapirhua, orientada a difusion de informacion publica, ubicacion y servicios digitales para la ciudadania.",
      tech: [
        "cPanel",
        "Google Font API",
        "Open Graph",
        "PHP",
        "Google Maps",
        "Librerias JavaScript",
        "Axios",
        "Laravel",
        "Tailwind CSS"
      ],
      status: "COMPLETADO",
      year: "2026",
      github: "https://github.com/eliascoca85/colcapirhua.gob.bo",
      deploy: "https://colcapirhua.gob.bo/"
    },
    {
      id: 3,
      title: "ECOMMERCE CAMARAS",
      category: "E-commerce Platform",
      description: "Plataforma de comercio electronico para venta de camaras, con enfoque en rendimiento, experiencia de usuario y una arquitectura web moderna.",
      tech: ["PHP", "Laravel", "Axios", "Tailwind CSS", "Bunny Fonts"],
      status: "COMPLETADO",
      year: "2024",
      github: "https://github.com/eliascoca85/Ecommerce-Camaras",
      deploy: "https://ecommerce-camaras-production.up.railway.app/"
    },
    {
      id: 4,
      title: "DIARY",
      category: "Mobile App",
      description: "Aplicacion de diario personal con almacenamiento local, multimedia, notificaciones y consumo de API externa para datos meteorologicos.",
      tech: [
        "Flutter",
        "Isar ",
        "image_picker",
        "flutter_sound",
        "local_notifications",
        "dart",
        "crypto (SHA-256)",
        "OpenWeatherMap API"
      ],
      status: "COMPLETADO",
      year: "2025",
      github: "https://github.com/eliascoca85/Diary-flutter",
      deploy: "https://github.com/eliascoca85/Diary-flutter",
      apk: "https://github.com/eliascoca85/Diary-flutter/releases/download/v3.0.0/app-debug.apk"
    }
  ];

  const projectImagesById = {
    1: [
      "/images/tegrity/1.webp",
      "/images/tegrity/2.webp",
      "/images/tegrity/3.webp",
      "/images/tegrity/4.webp"
    ],
    2: [
      "/images/alcaldia/1.webp",
      "/images/alcaldia/2.webp",
      "/images/alcaldia/3.webp",
      "/images/alcaldia/4.webp"
    ],
    3: [
      "/images/ecommerce_camaras/1.webp",
      "/images/ecommerce_camaras/2.webp",
      "/images/ecommerce_camaras/3.webp",
      "/images/ecommerce_camaras/4.webp"
    ],
    4: [
      "/images/diary/1.webp",
      "/images/diary/2.webp",
      "/images/diary/3.webp",
      "/images/diary/4.webp"
    ]
  };

  const selectedProjectData = projects[selectedProject];
  const selectedProjectImages = projectImagesById[selectedProjectData.id] || [];
  const hasSelectedProjectImages = selectedProjectImages.length > 0;
  const isDiarySelected = selectedProjectData.id === 4;

  useEffect(() => {
    if (!hasSelectedProjectImages) {
      return;
    }

    const intervalId = setInterval(() => {
      setProjectImageIndex((current) => (current + 1) % selectedProjectImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [hasSelectedProjectImages, selectedProjectImages.length]);

  useEffect(() => {
    setProjectImageIndex(0);
  }, [selectedProject]);

  const styles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 70%)',
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      fontFamily: "'Courier New', 'Consolas', monospace",
      color: 'white',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.3s ease',
      zIndex: 1000,
      padding: `calc(env(safe-area-inset-top, 0px) + var(--quick-menu-height, 0px) + ${getResponsiveValue('16px', '18px', '22px', screenSize)}) ${getResponsiveValue('15px', '25px', '40px', screenSize)} ${getResponsiveValue('15px', '25px', '40px', screenSize)}`,
      overflowY: 'auto'
    },
    mainContent: {
      maxWidth: '1400px',
      padding: getResponsiveValue('0 15px', '0 25px', '0 40px', screenSize),
      width: '100%',
      height: screenSize.isMobile ? 'auto' : '90vh',
      display: 'flex',
      flexDirection: 'column',
      marginTop: 0,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: getResponsiveValue('20px', '25px', '30px', screenSize)
    },
    title: {
      fontSize: getResponsiveValue('24px', '28px', '32px', screenSize),
      fontWeight: 'bold',
      letterSpacing: getResponsiveValue('2px', '2.5px', '3px', screenSize),
      marginBottom: '10px',
      textTransform: 'uppercase'
    },
    subtitle: {
      fontSize: getResponsiveValue('12px', '13px', '14px', screenSize),
      color: 'rgba(255, 255, 255, 0.7)',
      letterSpacing: getResponsiveValue('1px', '1.5px', '2px', screenSize)
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: screenSize.isMobile ? '1fr' : 'minmax(280px, 340px) minmax(0, 1fr)',
      gap: getResponsiveValue('15px', '20px', '25px', screenSize),
      flex: screenSize.isMobile ? 'none' : 1,
      width: '100%',
      minHeight: 0,
      alignItems: 'stretch'
    },
    projectsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: getResponsiveValue('8px', '10px', '12px', screenSize),
      maxHeight: screenSize.isMobile ? 'none' : '600px',
      overflowY: screenSize.isMobile ? 'visible' : 'auto',
      paddingRight: screenSize.isMobile ? '0' : '8px'
    },
    projectCard: {
      background: 'rgba(0, 0, 0, 0.6)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '10px',
      padding: getResponsiveValue('12px', '15px', '18px', screenSize),
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      backdropFilter: 'blur(10px)'
    },
    projectCardActive: {
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
      transform: screenSize.isMobile ? 'none' : 'translateX(8px)'
    },
    projectHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '8px'
    },
    projectTitle: {
      fontSize: getResponsiveValue('13px', '14px', '15px', screenSize),
      fontWeight: 'bold',
      letterSpacing: '1px'
    },
    projectYear: {
      fontSize: getResponsiveValue('10px', '10px', '11px', screenSize),
      color: 'rgba(255, 255, 255, 0.6)',
      letterSpacing: '0.5px'
    },
    projectCategory: {
      fontSize: getResponsiveValue('10px', '11px', '12px', screenSize),
      color: 'rgba(255, 255, 255, 0.8)',
      letterSpacing: '0.5px',
      marginBottom: '8px'
    },
    projectStatus: {
      fontSize: getResponsiveValue('9px', '10px', '11px', screenSize),
      fontWeight: 'bold',
      letterSpacing: '0.5px',
      padding: getResponsiveValue('3px 8px', '4px 10px', '5px 12px', screenSize),
      borderRadius: '10px',
      marginTop: '8px',
      width: 'fit-content'
    },
    statusCompleted: {
      background: 'rgba(0, 255, 0, 0.2)',
      border: '1px solid rgba(0, 255, 0, 0.5)',
      color: 'rgba(0, 255, 0, 0.9)'
    },
    statusInProgress: {
      background: 'rgba(255, 165, 0, 0.2)',
      border: '1px solid rgba(255, 165, 0, 0.5)',
      color: 'rgba(255, 165, 0, 0.9)'
    },
    projectDetails: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '15px',
      padding: getResponsiveValue('20px', '25px', '30px', screenSize),
      backdropFilter: 'blur(10px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      position: 'relative',
      overflow: 'hidden',
      minHeight: getResponsiveValue('520px', '600px', '620px', screenSize)
    },
    detailLayout: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      width: '100%',
      height: '100%'
    },
    detailContent: {
      width: '100%',
      maxWidth: '100%',
      background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.76) 0%, rgba(0, 0, 0, 0.58) 72%, rgba(0, 0, 0, 0) 100%)',
      border: 'none',
      borderRadius: '0',
      padding: getResponsiveValue('14px', '16px', '18px', screenSize),
      zIndex: 1,
      marginBottom: getResponsiveValue('16px', '20px', '24px', screenSize)
    },
    detailTitle: {
      fontSize: getResponsiveValue('20px', '24px', '28px', screenSize),
      fontWeight: 'bold',
      letterSpacing: getResponsiveValue('1.5px', '2px', '2.5px', screenSize),
      marginBottom: '10px'
    },
    detailCategory: {
      fontSize: getResponsiveValue('12px', '13px', '14px', screenSize),
      color: 'rgba(255, 255, 255, 0.7)',
      letterSpacing: '1px',
      marginBottom: '20px'
    },
    detailDescription: {
      fontSize: getResponsiveValue('13px', '14px', '15px', screenSize),
      lineHeight: '1.6',
      color: 'rgba(255, 255, 255, 0.8)',
      marginBottom: '25px',
      letterSpacing: '0.5px'
    },
    techStack: {
      marginBottom: '20px'
    },
    techTitle: {
      fontSize: getResponsiveValue('11px', '12px', '13px', screenSize),
      fontWeight: 'bold',
      letterSpacing: '1px',
      marginBottom: '12px',
      color: 'rgba(255, 255, 255, 0.9)'
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: getResponsiveValue('6px', '7px', '8px', screenSize)
    },
    techTag: {
      padding: getResponsiveValue('4px 8px', '5px 9px', '6px 10px', screenSize),
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '12px',
      fontSize: getResponsiveValue('9px', '10px', '11px', screenSize),
      fontWeight: 'bold',
      letterSpacing: '0.5px'
    },
    actionButtons: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginTop: '15px'
    },
    actionButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: getResponsiveValue('8px 12px', '9px 14px', '10px 15px', screenSize),
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '8px',
      color: 'white',
      textDecoration: 'none',
      fontSize: getResponsiveValue('10px', '11px', '12px', screenSize),
      fontWeight: 'bold',
      letterSpacing: '1px',
      transition: 'background 0.2s ease',
      width: 'fit-content'
    },
    backButton: {
      position: 'fixed',
      top: `calc(env(safe-area-inset-top, 0px) + var(--quick-menu-height, 0px) + ${getResponsiveValue('8px', '10px', '12px', screenSize)})`,
      right: getResponsiveValue('15px', '25px', '40px', screenSize),
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      width: getResponsiveValue('40px', '45px', '50px', screenSize),
      height: getResponsiveValue('40px', '45px', '50px', screenSize),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: getResponsiveValue('16px', '18px', '20px', screenSize),
      color: 'white',
      transition: 'background 0.2s ease',
      backdropFilter: 'blur(10px)',
      zIndex: 2202
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'COMPLETADO':
        return styles.statusCompleted;
      case 'EN DESARROLLO':
        return styles.statusInProgress;
      default:
        return styles.statusCompleted;
    }
  };

  const handleBack = () => {
    setIsVisible(false);
    setTimeout(() => {
      onBack && onBack();
    }, 300);
  };

  return (
    <div style={styles.container} className="portafolio-scroll">
      <style>{`
        /* Scrollbar arcade/nebula (solo Portafolio) */
        @keyframes portafolioStarsDrift {
          0% {
            background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%;
          }
          50% {
            background-position: 0% 18%, 0% 10%, 0% 0%, 0% 0%;
          }
          100% {
            background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%;
          }
        }

        @keyframes portafolioThumbNeon {
          0% {
            transform: translateZ(0);
            filter: saturate(1.1) contrast(1.05);
            box-shadow:
              0 0 10px rgba(255, 43, 214, 0.20),
              0 0 26px rgba(255, 165, 0, 0.12),
              inset 0 0 0 1px rgba(255, 255, 255, 0.10);
            background-position: 0% 0%, 0% 0%;
          }
          50% {
            filter: saturate(1.35) contrast(1.12);
            box-shadow:
              0 0 18px rgba(255, 43, 214, 0.42),
              0 0 42px rgba(255, 165, 0, 0.22),
              inset 0 0 0 1px rgba(255, 255, 255, 0.14);
            background-position: 0% 40%, 0% 0%;
          }
          100% {
            filter: saturate(1.1) contrast(1.05);
            box-shadow:
              0 0 10px rgba(255, 43, 214, 0.20),
              0 0 26px rgba(255, 165, 0, 0.12),
              inset 0 0 0 1px rgba(255, 255, 255, 0.10);
            background-position: 0% 0%, 0% 0%;
          }
        }

        .portafolio-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 255, 180, 0.65) rgba(255, 255, 255, 0.03);
        }

        .portafolio-scroll::-webkit-scrollbar {
          width: 10px;
        }

        .portafolio-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
          border-left: 1px solid rgba(0, 255, 180, 0.08);
          border-radius: 999px;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
          animation: none;
        }

        .portafolio-scroll::-webkit-scrollbar-thumb {
          border-radius: 999px;
          border: 2px solid rgba(0, 0, 0, 0.65);
          background: linear-gradient(
            180deg,
            rgba(0, 255, 180, 0.85) 0%,
            rgba(0, 190, 255, 0.55) 70%,
            rgba(0, 255, 180, 0.35) 100%
          );
          box-shadow:
            0 0 10px rgba(0, 255, 180, 0.14),
            inset 0 0 0 1px rgba(255, 255, 255, 0.08);
          animation: none;
        }

        .portafolio-scroll::-webkit-scrollbar-thumb:hover {
          border-color: rgba(0, 0, 0, 0.75);
          box-shadow:
            0 0 14px rgba(0, 255, 180, 0.20),
            inset 0 0 0 1px rgba(255, 255, 255, 0.10);
        }

        .portafolio-scroll::-webkit-scrollbar-thumb:active {
          box-shadow:
            0 0 18px rgba(0, 255, 180, 0.26),
            inset 0 0 0 1px rgba(255, 255, 255, 0.12);
        }

        .portafolio-scroll::-webkit-scrollbar-corner {
          background: rgba(0, 0, 0, 0.60);
        }
      `}</style>
      {/* Botón de regreso */}
      <button 
        style={styles.backButton}
        onClick={handleBack}
        onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
        onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
      >
        ✕
      </button>

      <div style={styles.mainContent}>
        <div style={styles.header}>
          <h1 style={styles.title}>Portafolio</h1>
          <p style={styles.subtitle}>Proyectos & Desarrollos</p>
        </div>

        <div style={styles.projectsGrid}>
          <div style={styles.projectsList}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                style={{
                  ...styles.projectCard,
                  ...(selectedProject === index ? styles.projectCardActive : {})
                }}
                onClick={() => setSelectedProject(index)}
                onMouseEnter={(e) => {
                  if (selectedProject !== index) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedProject !== index) {
                    e.target.style.background = 'rgba(0, 0, 0, 0.6)';
                  }
                }}
              >
                <div style={styles.projectHeader}>
                  <div style={styles.projectTitle}>{project.title}</div>
                  <div style={styles.projectYear}>{project.year}</div>
                </div>
                <div style={styles.projectCategory}>{project.category}</div>
                <div style={{
                  ...styles.projectStatus,
                  ...getStatusStyle(project.status)
                }}>
                  {project.status}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              ...styles.projectDetails,
              backgroundImage: hasSelectedProjectImages
                ? isDiarySelected
                  ? `linear-gradient(90deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.52) 45%, rgba(0, 0, 0, 0.20) 100%), url(${selectedProjectImages[projectImageIndex]})`
                  : `linear-gradient(110deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.42) 62%, rgba(0, 0, 0, 0.58) 100%), url(${selectedProjectImages[projectImageIndex]})`
                : 'none',
              backgroundSize: hasSelectedProjectImages
                ? isDiarySelected
                  ? `100% 100%, auto ${getResponsiveValue('72%', '76%', '50%', screenSize)}`
                  : `100% 100%, ${getResponsiveValue('94%', '86%', '80%', screenSize)} auto`
                : 'auto',
              backgroundPosition: hasSelectedProjectImages
                ? isDiarySelected
                  ? `center, center ${getResponsiveValue('90%', '86%', '82%', screenSize)}`
                  : `center, center ${getResponsiveValue('86%', '82%', '78%', screenSize)}`
                : 'initial',
              backgroundRepeat: hasSelectedProjectImages ? 'no-repeat, no-repeat' : 'repeat'
            }}  
          >
            <div style={styles.detailLayout}>
              <div style={styles.detailContent}>
                <div style={styles.detailTitle}>
                  {projects[selectedProject].title}
                </div>
                <div style={styles.detailCategory}>
                  {projects[selectedProject].category}
                </div>
                <div style={styles.detailDescription}>
                  {projects[selectedProject].description}
                </div>
                
                <div style={styles.techStack}>
                  <div style={styles.techTitle}>TECNOLOGÍAS UTILIZADAS</div>
                  <div style={styles.techTags}>
                    {projects[selectedProject].tech.map((tech, index) => (
                      <span key={index} style={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{
                  ...styles.projectStatus,
                  ...getStatusStyle(projects[selectedProject].status)
                }}>
                  {projects[selectedProject].status}
                </div>
              </div>

              <div style={{
                ...styles.actionButtons,
                alignSelf: screenSize.isMobile ? 'stretch' : 'end',
                justifyContent: screenSize.isMobile ? 'flex-start' : 'flex-end',
                marginTop: 'auto',
                zIndex: 2
              }}>
              <a
                href={projects[selectedProject].github}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.actionButton}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
              >
                🐙 VER EN GITHUB
              </a>

              <a
                href={projects[selectedProject].deploy}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.actionButton}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
              >
                🚀 VER DEPLOY
              </a>

              {projects[selectedProject].title === 'DIARY' && (
                <a
                  href={projects[selectedProject].apk}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.actionButton}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                >
                  📱 DESCARGAR APK
                </a>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
