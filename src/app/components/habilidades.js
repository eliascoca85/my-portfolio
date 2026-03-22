"use client";

import { useState, useEffect } from 'react';
import { useResponsive, getResponsiveValue } from '../hooks/useResponsive';
import DecryptedText from './DecryptedText';

export default function Habilidades({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);
  const screenSize = useResponsive();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      name: "FRONTEND",
      icon: "/images/react.svg",
      skills: [
        { name: "React/Next.js", icon: "/images/react.svg" },
        { name: "JavaScript/TypeScript", icon: "/images/javascript.svg" },
        { name: "CSS/SCSS", icon: "/images/css3.svg" },
        { name: "HTML5", icon: "/images/html5.svg" }
      ]
    },
    {
      name: "BACKEND",
      icon: "/images/node.svg",
      skills: [
        { name: "Node.js", icon: "/images/node.svg" },
        { name: "PHP", icon: "/images/php.svg" },
        { name: "Dart", icon: "/images/dart.svg" },
        { name: "Laravel", icon: "/images/laravel.svg" }
      ]
    },
    {
      name: "HERRAMIENTAS",
      icon: "/images/git.svg",
      skills: [
        { name: "Git/GitHub", icon: "/images/git.svg" },
        { name: "cPanel", icon: "/images/cP.svg" },
        { name: "Figma", icon: "/images/figma.svg" },
        { name: "WordPress", icon: "/images/wordpress.svg" }
      ]
    }
  ];

  const handleBack = () => {
    setIsVisible(false);
    setTimeout(() => {
      onBack && onBack();
    }, 300);
  };

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
      transition: 'opacity 0.5s ease',
      zIndex: 1000,
      padding: `calc(env(safe-area-inset-top, 0px) + var(--quick-menu-height, 0px) + ${getResponsiveValue('16px', '18px', '22px', screenSize)}) ${getResponsiveValue('20px', '30px', '40px', screenSize)} ${getResponsiveValue('20px', '30px', '40px', screenSize)}`,
      overflowY: 'auto'
    },
    mainContent: {
      maxWidth: '1200px',
      padding: getResponsiveValue('0 15px', '0 25px', '0 40px', screenSize),
      width: '100%',
      marginTop: 0,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: getResponsiveValue('25px', '35px', '40px', screenSize)
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
    categoriesContainer: {
      display: 'grid',
      gridTemplateColumns: screenSize.isMobile
        ? '1fr'
        : screenSize.isTablet
          ? 'repeat(2, 1fr)'
          : 'repeat(3, 1fr)',
      gap: getResponsiveValue('15px', '20px', '25px', screenSize),
      marginTop: '30px'
    },
    categoryCard: {
      display: 'flex',
      flexDirection: 'column',
      background: 'rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '15px',
      padding: getResponsiveValue('15px', '20px', '25px', screenSize),
      backdropFilter: 'blur(10px)',
      minHeight: getResponsiveValue('210px', '230px', '250px', screenSize),
      // Sin transiciones/animaciones en las tarjetas de habilidades
    },
    categoryHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: getResponsiveValue('10px', '12px', '15px', screenSize),
      marginBottom: getResponsiveValue('15px', '18px', '20px', screenSize)
    },
    categoryIcon: {
      width: getResponsiveValue('32px', '36px', '40px', screenSize),
      height: getResponsiveValue('32px', '36px', '40px', screenSize),
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: getResponsiveValue('6px', '7px', '8px', screenSize)
    },
    categoryIconImg: {
      width: getResponsiveValue('18px', '20px', '24px', screenSize),
      height: getResponsiveValue('18px', '20px', '24px', screenSize),
      filter: 'invert(1) brightness(0.9)'
    },
    categoryName: {
      fontSize: getResponsiveValue('14px', '15px', '16px', screenSize),
      fontWeight: 'bold',
      letterSpacing: '1px'
    },
    skillsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: getResponsiveValue('8px', '10px', '12px', screenSize),
      flex: 1
    },
    skillItem: {
      display: 'flex',
      alignItems: 'center',
      gap: getResponsiveValue('8px', '10px', '12px', screenSize),
      padding: getResponsiveValue('6px 0', '8px 0', '10px 0', screenSize),
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    skillIcon: {
      width: getResponsiveValue('14px', '16px', '18px', screenSize),
      height: getResponsiveValue('14px', '16px', '18px', screenSize),
      filter: 'invert(1) brightness(0.8)'
    },
    skillName: {
      fontSize: getResponsiveValue('12px', '13px', '14px', screenSize),
      fontWeight: 'bold',
      letterSpacing: '0.5px',
      color: 'rgba(255, 255, 255, 0.9)'
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

  return (
    <div style={styles.container}>
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
          <h1 style={styles.title}>
            <DecryptedText
              text="Habilidades Técnicas"
              animateOn="inViewHover"
              sequential
              revealDirection="start"
              speed={35}
              maxIterations={10}
              className="habilidades-title-revealed"
              encryptedClassName="habilidades-title-encrypted"
            />
          </h1>
          <p style={styles.subtitle}>Stack Tecnológico & Expertise</p>
        </div>

        <div style={styles.categoriesContainer}>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              style={styles.categoryCard}
            >
              <div style={styles.categoryHeader}>
                <div style={styles.categoryIcon}>
                  <img 
                    src={category.icon} 
                    alt={category.name} 
                    style={styles.categoryIconImg}
                  />
                </div>
                <div style={styles.categoryName}>
                  {category.name}
                </div>
              </div>

              <div style={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} style={styles.skillItem}>
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      style={styles.skillIcon}
                    />
                    <div style={styles.skillName}>{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .habilidades-title-revealed {
          color: rgba(255, 255, 255, 0.95);
        }
        .habilidades-title-encrypted {
          color: rgba(255, 255, 255, 0.22);
        }
      `}</style>
    </div>
  );
}
