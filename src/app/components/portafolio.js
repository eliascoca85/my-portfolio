"use client";

import { useState, useEffect } from 'react';
import { useResponsive, getResponsiveValue } from '../hooks/useResponsive';

export default function Portafolio({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  const screenSize = useResponsive();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "TEGRITY",
      category: "Web Application",
      description: "Aplicación web desarrollada con tecnologías modernas. Proyecto que demuestra habilidades en desarrollo frontend y manejo de datos.",
      tech: ["CSS", "JavaScript", "HTML5"],
      status: "COMPLETADO",
      year: "2024",
      github: "https://github.com/eliascoca85/TEGRITY"
    },
    {
      id: 2,
      title: "ECOMMERCE CAMARAS",
      category: "E-commerce Platform",
      description: "Plataforma de comercio electrónico especializada en la venta de cámaras. Incluye catálogo de productos, carrito de compras y sistema de gestión.",
      tech: ["HTML5", "CSS", "JavaScript", "Bootstrap"],
      status: "COMPLETADO",
      year: "2024",
      github: "https://github.com/eliascoca85/Ecommerce-Camaras"
    },
    {
      id: 3,
      title: "FITNESS ROUTINES",
      category: "Health & Fitness App",
      description: "Aplicación para gestión de rutinas de ejercicios y seguimiento de fitness. Interfaz intuitiva para planificar entrenamientos.",
      tech: ["Dart", "Flutter", "Mobile Development"],
      status: "COMPLETADO",
      year: "2024",
      github: "https://github.com/eliascoca85/Fitness_Routines"
    },
    {
      id: 4,
      title: "PROYECTO ECOMMERCE",
      category: "Full Stack E-commerce",
      description: "Proyecto de comercio electrónico completo con funcionalidades avanzadas. Sistema robusto para gestión de productos y ventas online.",
      tech: ["JavaScript", "Node.js", "Database", "API"],
      status: "COMPLETADO",
      year: "2024",
      github: "https://github.com/eliascoca85/proyecto_ecommerce"
    },
    {
      id: 5,
      title: "ECOMMERCE PROJECT",
      category: "Advanced E-commerce",
      description: "Versión avanzada de plataforma e-commerce con características empresariales. Arquitectura escalable y funcionalidades premium.",
      tech: ["CSS", "JavaScript", "Advanced Framework"],
      status: "EN DESARROLLO",
      year: "2024",
      github: "https://github.com/eliascoca85/EcommerceProject"
    }
  ];

  const styles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 70%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Courier New', 'Consolas', monospace",
      color: 'white',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.3s ease',
      zIndex: 1000,
      padding: getResponsiveValue('15px', '25px', '40px', screenSize),
      overflowY: 'auto'
    },
    mainContent: {
      maxWidth: '1400px',
      padding: getResponsiveValue('0 15px', '0 25px', '0 40px', screenSize),
      width: '100%',
      height: screenSize.isMobile ? 'auto' : '90vh',
      display: 'flex',
      flexDirection: 'column'
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
      gridTemplateColumns: screenSize.isMobile ? '1fr' : '1fr 2fr',
      gap: getResponsiveValue('15px', '20px', '25px', screenSize),
      flex: screenSize.isMobile ? 'none' : 1
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
      background: 'rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '15px',
      padding: getResponsiveValue('20px', '25px', '30px', screenSize),
      backdropFilter: 'blur(10px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
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
    githubButton: {
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
      marginTop: '15px',
      width: 'fit-content'
    },
    backButton: {
      position: 'absolute',
      top: getResponsiveValue('15px', '25px', '40px', screenSize),
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
      backdropFilter: 'blur(10px)'
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

  return (
    <div style={styles.container}>
      {/* Botón de regreso */}
      <button 
        style={styles.backButton}
        onClick={() => onBack && onBack()}
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

          <div style={styles.projectDetails}>
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

            <a
              href={projects[selectedProject].github}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.githubButton}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
            >
              🐙 VER EN GITHUB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
