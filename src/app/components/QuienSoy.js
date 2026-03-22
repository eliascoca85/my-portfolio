"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useResponsive, getResponsiveValue } from '../hooks/useResponsive';
import DecryptedText from './DecryptedText';

export default function QuienSoy({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const screenSize = useResponsive();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSectionChange = (index) => {
    console.log('Changing section to:', index);
    console.log('Current activeSection:', activeSection);
    setActiveSection(index);
  };

  const handleBack = () => {
    setIsVisible(false);
    setTimeout(() => {
      onBack && onBack();
    }, 300);
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
      zIndex: 1000,
      padding: getResponsiveValue('15px', '25px', '40px', screenSize),
      overflowY: 'auto'
    },
    mainGrid: {
      display: 'grid',
      gridTemplateColumns: screenSize.isMobile ? '1fr' : '1fr 2fr',
      gap: getResponsiveValue('25px', '35px', '50px', screenSize),
      maxWidth: '1200px',
      padding: getResponsiveValue('0 15px', '0 25px', '0 40px', screenSize),
      alignItems: 'center',
      width: '100%',
      marginTop: getResponsiveValue('96px', '108px', '116px', screenSize)
    },
    profileSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: getResponsiveValue('20px', '25px', '30px', screenSize),
      order: screenSize.isMobile ? 2 : 1
    },
    avatarContainer: {
      position: 'relative',
      width: getResponsiveValue('200px', '250px', '300px', screenSize),
      height: getResponsiveValue('200px', '250px', '300px', screenSize),
      margin: getResponsiveValue('30px auto 0', '45px auto 0', '60px auto 0', screenSize),
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
      border: getResponsiveValue('2px solid rgba(255, 255, 255, 0.3)', '2.5px solid rgba(255, 255, 255, 0.3)', '3px solid rgba(255, 255, 255, 0.3)', screenSize),
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
      top: getResponsiveValue('-48px', '-54px', '-60px', screenSize),
      width: getResponsiveValue('240px', '270px', '300px', screenSize),
      height: getResponsiveValue('288px', '324px', '360px', screenSize),
      objectFit: 'cover',
      objectPosition: 'top center',
      filter: 'grayscale(100%)'
    },
    avatarImageOverflow: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: getResponsiveValue('-48px', '-54px', '-60px', screenSize),
      width: getResponsiveValue('240px', '270px', '300px', screenSize),
      height: getResponsiveValue('96px', '108px', '120px', screenSize),
      overflow: 'visible',
      zIndex: 10
    },
    avatarImageTop: {
      width: '100%',
      height: getResponsiveValue('288px', '324px', '360px', screenSize),
      objectFit: 'cover',
      objectPosition: 'top center',
      clipPath: getResponsiveValue('ellipse(120px 48px at center 48px)', 'ellipse(135px 54px at center 54px)', 'ellipse(150px 60px at center 60px)', screenSize),
      filter: 'grayscale(100%)'
    },
    avatarRing: {
      position: 'absolute',
      width: getResponsiveValue('216px', '266px', '320px', screenSize),
      height: getResponsiveValue('216px', '266px', '320px', screenSize),
      top: getResponsiveValue('-8px', '-8px', '-10px', screenSize),
      left: getResponsiveValue('-8px', '-8px', '-10px', screenSize),
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '50%',
      borderStyle: 'dashed',
      zIndex: -1
    },
    nameTag: {
      background: 'rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: getResponsiveValue('8px', '10px', '10px', screenSize),
      padding: getResponsiveValue('12px 20px', '14px 22px', '15px 25px', screenSize),
      textAlign: 'center',
      backdropFilter: 'blur(10px)'
    },
    name: {
      fontSize: getResponsiveValue('20px', '22px', '24px', screenSize),
      fontWeight: 'bold',
      letterSpacing: '2px',
      marginBottom: '5px'
    },
    role: {
      fontSize: getResponsiveValue('12px', '13px', '14px', screenSize),
      color: 'rgba(255, 255, 255, 0.7)',
      letterSpacing: '1px'
    },
    contentSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: getResponsiveValue('15px', '18px', '20px', screenSize),
      position: 'relative',
      zIndex: 5,
      order: screenSize.isMobile ? 1 : 2
    },
    sectionSelector: {
      display: 'flex',
      gap: getResponsiveValue('8px', '10px', '12px', screenSize),
      marginBottom: getResponsiveValue('20px', '25px', '30px', screenSize),
      position: 'relative',
      zIndex: 10,
      flexWrap: screenSize.isMobile ? 'wrap' : 'nowrap',
      justifyContent: screenSize.isMobile ? 'center' : 'flex-start'
    },
    selectorButton: {
      padding: getResponsiveValue('8px 16px', '10px 18px', '10px 20px', screenSize),
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: getResponsiveValue('15px', '18px', '20px', screenSize),
      color: 'white',
      fontSize: getResponsiveValue('10px', '11px', '12px', screenSize),
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
      borderRadius: getResponsiveValue('12px', '14px', '15px', screenSize),
      padding: getResponsiveValue('20px', '25px', '30px', screenSize),
      backdropFilter: 'blur(10px)',
      minHeight: getResponsiveValue('150px', '175px', '200px', screenSize),
      transition: 'all 0.2s ease'
    },
    sectionTitle: {
      fontSize: getResponsiveValue('16px', '17px', '18px', screenSize),
      fontWeight: 'bold',
      letterSpacing: '2px',
      marginBottom: getResponsiveValue('15px', '18px', '20px', screenSize),
      color: 'rgba(255, 255, 255, 0.9)',
      textTransform: 'uppercase'
    },
    sectionContent: {
      fontSize: getResponsiveValue('14px', '15px', '16px', screenSize),
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
      backgroundSize: getResponsiveValue('40px 40px', '50px 50px', '60px 60px', screenSize),
      opacity: 0.3
    },
    backButton: {
      position: 'fixed',
      top: `calc(env(safe-area-inset-top, 0px) + ${getResponsiveValue('100px', '84px', '92px', screenSize)})`,
      right: getResponsiveValue('20px', '30px', '40px', screenSize),
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
        onClick={handleBack}
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
                width={screenSize.isMobile ? 240 : screenSize.isTablet ? 270 : 300}
                height={screenSize.isMobile ? 288 : screenSize.isTablet ? 324 : 360}
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
                width={screenSize.isMobile ? 240 : screenSize.isTablet ? 270 : 300}
                height={screenSize.isMobile ? 288 : screenSize.isTablet ? 324 : 360}
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
                <DecryptedText
                  text={section.title}
                  animateOn="hover"
                  sequential
                  revealDirection="start"
                  speed={40}
                  maxIterations={12}
                  characters="ABCD0123!?¿"
                  className="quien-soy-selector-revealed"
                  encryptedClassName="quien-soy-selector-encrypted"
                  style={{
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    letterSpacing: 'inherit'
                  }}
                />
              </button>
            ))}
          </div>

          <div style={styles.infoPanel}>
            <div style={styles.sectionTitle}>
              <DecryptedText
                key={activeSection}
                text={sections[activeSection].title}
                animateOn="inViewHover"
                sequential
                revealDirection="start"
                speed={32}
                maxIterations={14}
                useOriginalCharsOnly={false}
                characters="ABCDEFGHIJ0123456789!?¿"
                className="quien-soy-title-revealed"
                encryptedClassName="quien-soy-title-encrypted"
              />
            </div>
            <div style={styles.sectionContent}>
              <DecryptedText
                key={`content-${activeSection}`}
                text={sections[activeSection].content}
                animateOn="inViewHover"
                sequential
                revealDirection="start"
                speed={14}
                useOriginalCharsOnly={false}
                characters="ABCDEFGHIJKLMNÑ0123456789.,;:!?¿¡"
                parentClassName="quien-soy-content-decrypt"
                className="quien-soy-content-revealed"
                encryptedClassName="quien-soy-content-encrypted"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .quien-soy-title-revealed {
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 0 14px rgba(255, 255, 255, 0.25);
        }
        .quien-soy-title-encrypted {
          color: rgba(255, 255, 255, 0.28);
        }
        .quien-soy-selector-revealed {
          color: inherit;
        }
        .quien-soy-selector-encrypted {
          opacity: 0.5;
        }
        .quien-soy-content-revealed {
          color: rgba(255, 255, 255, 0.88);
        }
        .quien-soy-content-encrypted {
          color: rgba(255, 255, 255, 0.22);
        }
        .quien-soy-content-decrypt {
          display: block;
          width: 100%;
        }

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
