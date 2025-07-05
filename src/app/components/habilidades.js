"use client";

import { useState, useEffect } from 'react';

export default function Habilidades({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);

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
        { name: "Python", icon: "/images/python.svg" },
        { name: "APIs REST", icon: "/images/javascript.svg" },
        { name: "PostgreSQL", icon: "/images/postgresql.svg" }
      ]
    },
    {
      name: "HERRAMIENTAS",
      icon: "/images/git.svg",
      skills: [
        { name: "Git/GitHub", icon: "/images/git.svg" },
        { name: "Figma", icon: "/images/figma.svg" },
        { name: "Tailwind CSS", icon: "/images/tailwindcss.svg" },
        { name: "WordPress", icon: "/images/wordpress.svg" }
      ]
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
      transition: 'opacity 0.5s ease',
      zIndex: 1000
    },
    mainContent: {
      maxWidth: '1200px',
      padding: '0 40px',
      width: '100%'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px'
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      letterSpacing: '3px',
      marginBottom: '10px',
      textTransform: 'uppercase'
    },
    subtitle: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.7)',
      letterSpacing: '2px'
    },
    categoriesContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '25px',
      marginTop: '30px'
    },
    categoryCard: {
      background: 'rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '15px',
      padding: '25px',
      backdropFilter: 'blur(10px)',
      transition: 'background 0.2s ease'
    },
    categoryHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '20px'
    },
    categoryIcon: {
      width: '40px',
      height: '40px',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px'
    },
    categoryIconImg: {
      width: '24px',
      height: '24px',
      filter: 'invert(1) brightness(0.9)'
    },
    categoryName: {
      fontSize: '16px',
      fontWeight: 'bold',
      letterSpacing: '1px'
    },
    skillsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    skillItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    skillIcon: {
      width: '18px',
      height: '18px',
      filter: 'invert(1) brightness(0.8)'
    },
    skillName: {
      fontSize: '14px',
      fontWeight: 'bold',
      letterSpacing: '0.5px',
      color: 'rgba(255, 255, 255, 0.9)'
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
          <h1 style={styles.title}>Habilidades Técnicas</h1>
          <p style={styles.subtitle}>Stack Tecnológico & Expertise</p>
        </div>

        <div style={styles.categoriesContainer}>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              style={styles.categoryCard}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.05)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.8)'}
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
    </div>
  );
}
