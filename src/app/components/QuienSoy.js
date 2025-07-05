"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function QuienSoy({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSectionChange = (index) => {
    console.log('Changing section to:', index);
    console.log('Current activeSection:', activeSection);
    setActiveSection(index);
  };

  const sections = [
    {
      title: "IDENTIFICACIÓN",
      content: "Desarrollador Full Stack especializado en tecnologías modernas y Diseñador UI/UX. Experto en crear soluciones digitales innovadoras que combinan funcionalidad avanzada con diseño excepcional. Apasionado por la tecnología y el desarrollo de experiencias de usuario únicas."
    },
    {
      title: "MISIÓN",
      content: "Crear experiencias digitales únicas que combinen funcionalidad avanzada con diseño innovador. Mi objetivo es desarrollar aplicaciones web modernas que no solo cumplan con los requisitos técnicos, sino que también brinden una experiencia excepcional al usuario final."
    },
    {
      title: "VISIÓN",
      content: "Liderar el desarrollo de aplicaciones web que definan el futuro de la interacción digital. Aspiro a ser reconocido como un desarrollador que trasciende las barreras tradicionales entre diseño y funcionalidad, creando soluciones que marquen tendencia en la industria."
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
      zIndex: 1000
    },
    mainGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: '50px',
      maxWidth: '1200px',
      padding: '0 40px',
      alignItems: 'center'
    },
    profileSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px'
    },
    avatarContainer: {
      position: 'relative',
      width: '300px',
      height: '300px',
      margin: '60px auto 0',
      cursor: 'pointer'
    },
    avatarBackground: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
      borderRadius: '50%',
      opacity: 0.3
    },
    avatarCircle: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
      borderRadius: '50%',
      border: '3px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)'
    },
    avatarImageContainer: {
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      borderRadius: '50%'
    },
    avatarImage: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '-60px',
      width: '300px',
      height: '360px',
      objectFit: 'cover',
      objectPosition: 'top center',
      filter: 'grayscale(100%)'
    },
    avatarImageOverflow: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '-60px',
      width: '300px',
      height: '120px',
      overflow: 'visible',
      zIndex: 10
    },
    avatarImageTop: {
      width: '100%',
      height: '360px',
      objectFit: 'cover',
      objectPosition: 'top center',
      clipPath: 'ellipse(150px 60px at center 60px)',
      filter: 'grayscale(100%)'
    },
    avatarRing: {
      position: 'absolute',
      width: '320px',
      height: '320px',
      top: '-10px',
      left: '-10px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '50%',
      borderStyle: 'dashed',
      zIndex: -1
    },
    nameTag: {
      background: 'rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '10px',
      padding: '15px 25px',
      textAlign: 'center',
      backdropFilter: 'blur(10px)'
    },
    name: {
      fontSize: '24px',
      fontWeight: 'bold',
      letterSpacing: '2px',
      marginBottom: '5px'
    },
    role: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.7)',
      letterSpacing: '1px'
    },
    contentSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      position: 'relative',
      zIndex: 5
    },
    sectionSelector: {
      display: 'flex',
      gap: '10px',
      marginBottom: '30px',
      position: 'relative',
      zIndex: 10
    },
    selectorButton: {
      padding: '10px 20px',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '20px',
      color: 'white',
      fontSize: '12px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textTransform: 'uppercase',
      userSelect: 'none',
      outline: 'none',
      position: 'relative',
      zIndex: 10,
      pointerEvents: 'auto'
    },
    selectorButtonActive: {
      background: 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
      color: '#000',
      boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
    },
    infoPanel: {
      background: 'rgba(0, 0, 0, 0.9)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '15px',
      padding: '30px',
      backdropFilter: 'blur(10px)',
      minHeight: '200px',
      transition: 'all 0.2s ease'
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      letterSpacing: '2px',
      marginBottom: '20px',
      color: 'rgba(255, 255, 255, 0.9)',
      textTransform: 'uppercase'
    },
    sectionContent: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: 'rgba(255, 255, 255, 0.8)',
      letterSpacing: '0.5px'
    },
    backgroundGrid: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.02) 1px, transparent 0)',
      backgroundSize: '60px 60px',
      opacity: 0.3
    },
    backButton: {
      position: 'absolute',
      top: '40px',
      right: '40px',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '20px',
      color: 'white',
      transition: 'background 0.2s ease',
      backdropFilter: 'blur(10px)'
    },
    floatingDots: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      pointerEvents: 'none'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundGrid} />
      
      <button 
        style={styles.backButton}
        onClick={() => onBack && onBack()}
      >
        ✕
      </button>
      
      <div style={styles.floatingDots}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              background: 'rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div style={styles.mainGrid}>
        <div style={styles.profileSection}>
          <div 
            style={styles.avatarContainer}
            className="avatar-container"
          >
            {/* Fondo con gradiente y efecto blur */}
            <div style={styles.avatarBackground} />
            <div style={styles.avatarCircle} />
            
            {/* Contenedor de la imagen con máscara circular */}
            <div style={styles.avatarImageContainer}>
              <Image
                src="/src/mauricio.png"
                alt="Mauricio"
                width={300}
                height={360}
                style={styles.avatarImage}
                className="avatar-image"
                priority
              />
            </div>
            
            {/* Parte que permite que la cabeza sobresalga */}
            <div style={styles.avatarImageOverflow}>
              <Image
                src="/src/mauricio.png"
                alt="Mauricio"
                width={300}
                height={360}
                style={styles.avatarImageTop}
                className="avatar-image"
                priority
              />
            </div>
            
            {/* Anillo animado */}
            <div style={styles.avatarRing} />
          </div>
          
          <div style={styles.nameTag}>
            <div style={styles.name}>MAURICIO</div>
            <div style={styles.role}>Full Stack Developer</div>
          </div>
        </div>

        <div style={styles.contentSection}>
          <div style={styles.sectionSelector}>
            {sections.map((section, index) => (
              <button
                key={index}
                className="quienSoy-selector-button"
                style={{
                  ...styles.selectorButton,
                  ...(activeSection === index ? styles.selectorButtonActive : {})
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Button clicked:', index);
                  handleSectionChange(index);
                }}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
              >
                {section.title}
              </button>
            ))}
          </div>

          <div style={styles.infoPanel}>
            <div style={styles.sectionTitle}>
              {sections[activeSection].title}
            </div>
            <div style={styles.sectionContent}>
              {sections[activeSection].content}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .quienSoy-selector-button {
          cursor: pointer !important;
          pointer-events: auto !important;
          position: relative !important;
          z-index: 1000 !important;
        }
        
        button:hover {
          background: rgba(255, 255, 255, 0.2) !important;
        }
        
        button:active {
          transform: scale(0.95) !important;
        }
      `}</style>
    </div>
  );
}
