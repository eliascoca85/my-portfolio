"use client";

import { useState, useEffect } from 'react';
import { useResponsive, getResponsiveValue } from '../hooks/useResponsive';

export default function Nav({ activeSection, onSectionChange }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const screenSize = useResponsive();
  
  const sections = ['Contacto', 'Habilidades', 'Portafolio', '¿Quién Soy?'];

  // Función para manejar el click en una sección
  const handleSectionClick = (section, index) => {
    setActiveIndex(index);
    onSectionChange(section);
    setIsExpanded(false);
  };

  // Componente SVG - ¿Quién Soy? / Ojo retro futurista (optimizado)
  const PersonIcon = () => (
    <svg 
      width={getResponsiveValue('80', '90', '105', screenSize)} 
      height={getResponsiveValue('80', '90', '105', screenSize)}
      viewBox="0 0 80 80" 
      style={{ 
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.8,
        filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))'
      }}
    >
      <defs>
        <radialGradient id="eyeGrad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#cccccc" />
        </radialGradient>
      </defs>
      
      {/* Ojo principal */}
      <ellipse 
        cx="40" 
        cy="40" 
        rx="25" 
        ry="18" 
        fill="url(#eyeGrad)" 
        stroke="#333" 
        strokeWidth="2"
      />
      
      {/* Pupila */}
      <circle 
        cx="40" 
        cy="40" 
        r="8" 
        fill="#000000" 
        stroke="#333" 
        strokeWidth="1"
      />
      
      {/* Reflejo */}
      <ellipse 
        cx="37" 
        cy="36" 
        rx="2" 
        ry="1" 
        fill="rgba(255, 255, 255, 0.8)" 
      />
      
      {/* Anillo radar */}
      <circle 
        cx="40" 
        cy="40" 
        r="20" 
        fill="none" 
        stroke="rgba(255, 255, 255, 0.4)" 
        strokeWidth="1" 
        strokeDasharray="4,2"
      />
    </svg>
  );

  // Componente SVG - Habilidades / Chip procesador (optimizado)
  const SkillsIcon = () => (
    <svg 
      width={getResponsiveValue('80', '90', '105', screenSize)} 
      height={getResponsiveValue('80', '90', '105', screenSize)}
      viewBox="0 0 80 80" 
      style={{ 
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.8,
        filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))'
      }}
    >
      <defs>
        <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#cccccc" />
        </linearGradient>
      </defs>
      
      {/* Chip principal */}
      <rect 
        x="25" 
        y="25" 
        width="30" 
        height="30" 
        rx="2" 
        fill="url(#chipGrad)" 
        stroke="#333" 
        strokeWidth="2"
      />
      
      {/* Núcleo */}
      <rect 
        x="32" 
        y="32" 
        width="16" 
        height="16" 
        rx="1" 
        fill="#333" 
        stroke="#666" 
        strokeWidth="1"
      />
      
      {/* Pines laterales */}
      <g opacity="0.9">
        <rect x="18" y="33" width="7" height="2" fill="#333" stroke="#666" strokeWidth="0.5"/>
        <rect x="18" y="38" width="7" height="2" fill="#333" stroke="#666" strokeWidth="0.5"/>
        <rect x="18" y="43" width="7" height="2" fill="#333" stroke="#666" strokeWidth="0.5"/>
        <rect x="55" y="33" width="7" height="2" fill="#333" stroke="#666" strokeWidth="0.5"/>
        <rect x="55" y="38" width="7" height="2" fill="#333" stroke="#666" strokeWidth="0.5"/>
        <rect x="55" y="43" width="7" height="2" fill="#333" stroke="#666" strokeWidth="0.5"/>
      </g>
      
      {/* Pines superior/inferior */}
      <g opacity="0.9">
        <rect x="33" y="18" width="2" height="7" fill="#333" stroke="#666" strokeWidth="0.5"/>
        <rect x="38" y="18" width="2" height="7" fill="#333" stroke="#666" strokeWidth="0.5"/>
        <rect x="43" y="18" width="2" height="7" fill="#333" stroke="#666" strokeWidth="0.5"/>
        <rect x="33" y="55" width="2" height="7" fill="#333" stroke="#666" strokeWidth="0.5"/>
        <rect x="38" y="55" width="2" height="7" fill="#333" stroke="#666" strokeWidth="0.5"/>
        <rect x="43" y="55" width="2" height="7" fill="#333" stroke="#666" strokeWidth="0.5"/>
      </g>
      
      {/* Etiqueta */}
      <text x="40" y="43" fill="#fff" fontSize="3" fontFamily="monospace" fontWeight="bold" textAnchor="middle">CPU</text>
    </svg>
  );

  // Componente SVG - Contacto / Radio comunicador (optimizado)
  const ContactIcon = () => (
    <svg 
      width={getResponsiveValue('80', '90', '105', screenSize)} 
      height={getResponsiveValue('80', '90', '105', screenSize)}
      viewBox="0 0 80 80" 
      style={{ 
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.8,
        filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))'
      }}
    >
      <defs>
        <linearGradient id="radioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#cccccc" />
        </linearGradient>
      </defs>
      
      {/* Cuerpo del radio */}
      <rect 
        x="25" 
        y="30" 
        width="30" 
        height="35" 
        rx="3" 
        fill="url(#radioGrad)" 
        stroke="#333" 
        strokeWidth="2"
      />
      
      {/* Antena */}
      <rect 
        x="39" 
        y="15" 
        width="2" 
        height="15" 
        fill="#333"
      />
      
      {/* Altavoz */}
      <circle 
        cx="40" 
        cy="42" 
        r="8" 
        fill="#333" 
        stroke="#666" 
        strokeWidth="1"
      />
      
      {/* Rejilla */}
      <circle cx="40" cy="42" r="5" fill="none" stroke="#999" strokeWidth="0.8"/>
      <circle cx="40" cy="42" r="3" fill="none" stroke="#999" strokeWidth="0.8"/>
      
      {/* Controles */}
      <rect x="30" y="55" width="3" height="3" rx="1" fill="#333" stroke="#666" strokeWidth="0.5"/>
      <rect x="38" y="55" width="3" height="3" rx="1" fill="#333" stroke="#666" strokeWidth="0.5"/>
      <rect x="46" y="55" width="3" height="3" rx="1" fill="#333" stroke="#666" strokeWidth="0.5"/>
      
      {/* Ondas de radio */}
      <g opacity="0.6">
        <path d="M15 35 Q20 30 25 35" fill="none" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1" strokeDasharray="2,1"/>
        <path d="M65 35 Q60 30 55 35" fill="none" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1" strokeDasharray="2,1"/>
      </g>
    </svg>
  );

  // Componente de logo SVG - Portafolio/Maletín (optimizado)
  const PortfolioIcon = () => (
    <svg 
      width={getResponsiveValue('80', '90', '105', screenSize)} 
      height={getResponsiveValue('80', '90', '105', screenSize)}
      viewBox="0 0 80 80" 
      className="portfolio-icon"
      style={{ 
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.8,
        filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))'
      }}
    >
      <defs>
        <linearGradient id="briefcaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#cccccc" />
        </linearGradient>
      </defs>
      
      {/* Cuerpo principal */}
      <rect 
        x="20" 
        y="35" 
        width="40" 
        height="25" 
        rx="2" 
        fill="url(#briefcaseGrad)" 
        stroke="#333" 
        strokeWidth="2"
      />
      
      {/* Tapa superior */}
      <rect 
        x="20" 
        y="30" 
        width="40" 
        height="6" 
        rx="1" 
        fill="url(#briefcaseGrad)" 
        stroke="#333" 
        strokeWidth="2"
      />
      
      {/* Asa */}
      <path 
        d="M30 30 Q30 22 35 22 L45 22 Q50 22 50 30" 
        fill="none"
        stroke="#333" 
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Cerraduras */}
      <rect x="25" y="40" width="4" height="3" rx="0.5" fill="#333" stroke="#666" strokeWidth="0.4"/>
      <rect x="51" y="40" width="4" height="3" rx="0.5" fill="#333" stroke="#666" strokeWidth="0.4"/>
      
      {/* Líneas decorativas */}
      <line x1="23" y1="44" x2="57" y2="44" stroke="#999" strokeWidth="0.6" opacity="0.6"/>
      <line x1="23" y1="48" x2="57" y2="48" stroke="#999" strokeWidth="0.6" opacity="0.6"/>
      
      {/* Etiqueta */}
      <rect x="30" y="46" width="20" height="6" rx="0.8" fill="#000" stroke="#666" strokeWidth="0.6" opacity="0.9"/>
      <text x="40" y="50" fill="#fff" fontSize="2.2" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PORTFOLIO</text>
    </svg>
  );

  useEffect(() => {
    // Aplicar estilos globales radar retro
    document.body.style.background = 'radial-gradient(circle at center, #1a1a1a 0%, #000000 70%)';
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Limpiar estilos al desmontar
      document.body.style.background = '';
      document.body.style.overflow = '';
    };
  }, []);

  const styles = {
    futuristicNav: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 70%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      fontFamily: "'Courier New', 'Consolas', monospace",
      overflow: 'hidden',
      padding: getResponsiveValue('10px', '20px', '40px', screenSize)
    },
    navCore: {
      position: 'relative',
      width: getResponsiveValue('150px', '180px', '200px', screenSize),
      height: getResponsiveValue('150px', '180px', '200px', screenSize),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
      transform: isExpanded ? 
        `scale(${getResponsiveValue('1.2', '1.3', '1.5', screenSize)})` : 
        'scale(1)'
    },
    centralOrb: {
      width: getResponsiveValue('40px', '50px', '60px', screenSize),
      height: getResponsiveValue('40px', '50px', '60px', screenSize),
      background: 'radial-gradient(circle, #ffffff 0%, #f0f0f0 100%)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      boxShadow: `
        0 0 0 2px rgba(255, 255, 255, 0.4),
        0 ${getResponsiveValue('4px', '6px', '8px', screenSize)} ${getResponsiveValue('16px', '24px', '32px', screenSize)} rgba(255, 255, 255, 0.15),
        inset 0 0 20px rgba(0, 0, 0, 0.1),
        0 0 ${getResponsiveValue('40px', '50px', '60px', screenSize)} rgba(255, 255, 255, ${isExpanded ? '0.3' : '0.1'})
      `,
      position: 'relative',
      zIndex: 10,
      border: '2px solid #333'
    },
    navRing: {
      position: 'absolute',
      width: getResponsiveValue('200px', '250px', '300px', screenSize),
      height: getResponsiveValue('200px', '250px', '300px', screenSize),
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      transition: 'all 0.6s ease',
      opacity: isExpanded ? 1 : 0,
      transform: isExpanded ? 'scale(1)' : 'scale(0.8)',
      background: 'conic-gradient(from 0deg, rgba(255, 255, 255, 0.05) 0%, transparent 90%, rgba(255, 255, 255, 0.2) 100%)',
      filter: 'blur(0.3px)'
    },
    navRingOuter: {
      position: 'absolute',
      width: getResponsiveValue('280px', '340px', '400px', screenSize),
      height: getResponsiveValue('280px', '340px', '400px', screenSize),
      border: '1px solid rgba(255, 255, 255, 0.15)',
      borderRadius: '50%',
      transition: 'all 0.8s ease',
      opacity: isExpanded ? 0.6 : 0,
      transform: isExpanded ? 'scale(1) rotate(0deg)' : 'scale(0.6) rotate(-45deg)',
      borderStyle: 'dashed',
      borderSpacing: '15px',
      animation: isExpanded ? 'radarSweep 6s linear infinite' : 'none'
    },
    radarSweepLine: {
      position: 'absolute',
      width: '2px',
      height: getResponsiveValue('100px', '125px', '150px', screenSize),
      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 0%, transparent 100%)',
      transformOrigin: 'bottom center',
      animation: isExpanded ? 'radarRotate 4s linear infinite' : 'none',
      left: '50%',
      bottom: '50%',
      transform: 'translateX(-50%)',
      filter: 'blur(0.5px)',
      boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
    },
    navItems: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      transition: 'all 0.6s ease',
      opacity: isExpanded ? 1 : 0,
      pointerEvents: isExpanded ? 'all' : 'none'
    },
    navItem: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: getResponsiveValue('12px', '13px', '14px', screenSize),
      height: getResponsiveValue('12px', '13px', '14px', screenSize),
      background: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transformOrigin: 'center',
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.4)'
    },
    navItemActive: {
      background: 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
      boxShadow: `
        0 0 25px rgba(255, 255, 255, 0.8),
        0 0 50px rgba(255, 255, 255, 0.4),
        inset 0 0 15px rgba(255, 255, 255, 0.3)
      `,
      border: '1px solid rgba(255, 255, 255, 0.9)'
    },
    itemLabel: {
      position: 'absolute',
      top: getResponsiveValue('25px', '30px', '35px', screenSize),
      left: '50%',
      transform: 'translateX(-50%)',
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: getResponsiveValue('8px', '9px', '10px', screenSize),
      fontWeight: 600,
      letterSpacing: getResponsiveValue('1px', '1.5px', '2px', screenSize),
      textTransform: 'uppercase',
      opacity: 0,
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap',
      textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
      background: 'rgba(0, 0, 0, 0.8)',
      padding: getResponsiveValue('3px 6px', '3px 7px', '4px 8px', screenSize),
      borderRadius: '10px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(10px)'
    },
    backgroundGrid: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.02) 1px, transparent 0)
      `,
      backgroundSize: getResponsiveValue('40px 40px', '50px 50px', '60px 60px', screenSize),
      opacity: 0.2
    },
    floatingElements: {
      position: 'absolute',
      width: '100%',
      height: '100%'
    },
    floatDot: {
      position: 'absolute',
      width: '2px',
      height: '2px',
      background: 'rgba(255, 255, 255, 0.6)',
      borderRadius: '50%',
      animation: 'floatUpDown 6s ease-in-out infinite',
      boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)',
      filter: 'blur(0.3px)'
    },
    peripheralUI: {
      position: 'absolute',
      top: getResponsiveValue('20px', '30px', '40px', screenSize),
      right: getResponsiveValue('20px', '30px', '40px', screenSize),
      display: 'flex',
      flexDirection: 'column',
      gap: getResponsiveValue('15px', '20px', '25px', screenSize),
      opacity: 0.4,
      transition: 'all 0.4s ease'
    },
    uiElement: {
      width: getResponsiveValue('40px', '50px', '60px', screenSize),
      height: '2px',
      background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
      position: 'relative',
      boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)'
    },
    statusPanel: {
      position: 'absolute',
      top: getResponsiveValue('20px', '30px', '40px', screenSize),
      left: getResponsiveValue('20px', '30px', '40px', screenSize),
      background: 'rgba(0, 0, 0, 0.9)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '10px',
      padding: getResponsiveValue('10px', '12px', '15px', screenSize),
      backdropFilter: 'blur(10px)',
      opacity: isExpanded ? 1 : 0,
      transition: 'all 0.5s ease',
      transform: isExpanded ? 'translateY(0)' : 'translateY(-20px)'
    },
    statusText: {
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: getResponsiveValue('10px', '11px', '12px', screenSize),
      fontFamily: 'monospace',
      letterSpacing: '1px',
      textTransform: 'uppercase'
    },
    bottomIndicator: {
      position: 'absolute',
      bottom: getResponsiveValue('20px', '30px', '40px', screenSize),
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: getResponsiveValue('8px', '10px', '12px', screenSize),
      background: 'rgba(0, 0, 0, 0.7)',
      padding: getResponsiveValue('8px 15px', '9px 17px', '10px 20px', screenSize),
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(15px)'
    },
    indicatorDot: {
      width: getResponsiveValue('6px', '7px', '8px', screenSize),
      height: getResponsiveValue('6px', '7px', '8px', screenSize),
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.3)',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      border: '1px solid rgba(255, 255, 255, 0.3)'
    },
    indicatorDotActive: {
      background: 'linear-gradient(135deg, #ffffff, #cccccc)',
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)',
      border: '1px solid rgba(255, 255, 255, 0.9)'
    },
    hologramEffect: {
      position: 'absolute',
      width: getResponsiveValue('280px', '340px', '400px', screenSize),
      height: getResponsiveValue('280px', '340px', '400px', screenSize),
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '50%',
      opacity: isExpanded ? 0.1 : 0,
      transition: 'all 1s ease',
      animation: isExpanded ? 'hologramScan 8s linear infinite' : 'none'
    }
  };

  return (
    <>
      <style>{`
        * {
          cursor: auto !important;
        }
        
        .nav-item, .central-orb, .indicator-dot {
          cursor: pointer !important;
        }
        
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes radarSweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes radarRotate {
          0% { transform: translateX(-50%) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(360deg); }
        }

        @keyframes hologramScan {
          0% { transform: rotate(0deg); opacity: 0.2; }
          50% { transform: rotate(180deg); opacity: 0.1; }
          100% { transform: rotate(360deg); opacity: 0.2; }
        }



        .nav-item:hover {
          background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%) !important;
          box-shadow: 
            0 0 20px rgba(255, 255, 255, 0.8),
            0 0 40px rgba(255, 255, 255, 0.4) !important;
          border: 2px solid rgba(255, 255, 255, 1) !important;
        }

        .nav-item:hover .item-label {
          opacity: 1 !important;
          transform: translateX(-50%) translateY(-5px) !important;
        }

        .nav-item:hover svg {
          opacity: 1 !important;
          filter: 
            drop-shadow(0 0 15px rgba(255, 255, 255, 0.8)) 
            brightness(1.1) !important;
        }

        .central-orb:hover {
          box-shadow: 
            0 0 0 2px rgba(255, 255, 255, 0.7),
            0 10px 40px rgba(255, 255, 255, 0.3) !important;
        }



        @media (max-width: 768px) {
          .nav-core {
            width: 150px !important;
            height: 150px !important;
          }
          
          .nav-ring {
            width: 250px !important;
            height: 250px !important;
          }
          
          .central-orb {
            width: 50px !important;
            height: 50px !important;
          }
        }
      `}</style>
      
      <nav style={styles.futuristicNav}>
        {/* Elementos de fondo radar retro simplificados */}
        
        {/* Status Panel */}
        <div style={styles.statusPanel}>
          <div style={styles.statusText}>RADAR: ACTIVE</div>
          <div style={{...styles.statusText, marginTop: '5px', opacity: 0.7}}>
            MENU: {isExpanded ? 'DETECTADO' : 'COLLAPSED'}
          </div>
        </div>
        
        <div style={styles.floatingElements}>
          {[...Array(6)].map((_, i) => {
            const positions = [
              { left: 15, top: 20 }, { left: 85, top: 15 }, { left: 25, top: 80 },
              { left: 75, top: 85 }, { left: 10, top: 50 }, { left: 90, top: 60 }
            ];
            
            const delays = [0, 2, 4, 1, 3, 5];
            
            return (
              <div 
                key={i}
                style={{
                  ...styles.floatDot,
                  left: `${positions[i].left}%`,
                  top: `${positions[i].top}%`,
                  animationDelay: `${delays[i]}s`,
                  background: `rgba(255, 255, 255, ${0.3 + (i % 2) * 0.2})`
                }}
              />
            );
          })}
        </div>

        <div style={styles.navCore} className="nav-core">
          {/* Hologram Effect */}
          <div style={styles.hologramEffect} />
          
          {/* Línea de barrido radar */}
          <div style={styles.radarSweepLine} />
          
          <div 
            style={styles.centralOrb}
            className="central-orb"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div style={{
              width: '2px',
              height: '20px',
              background: '#333',
              transform: `rotate(${isExpanded ? '45deg' : '0deg'})`,
              transition: 'transform 0.3s ease',
              boxShadow: isExpanded ? '0 0 8px rgba(0, 0, 0, 0.3)' : 'none'
            }} />
            <div style={{
              width: '20px',
              height: '2px',
              background: '#333',
              position: 'absolute',
              transform: `rotate(${isExpanded ? '45deg' : '0deg'})`,
              transition: 'transform 0.3s ease',
              boxShadow: isExpanded ? '0 0 8px rgba(0, 0, 0, 0.3)' : 'none'
            }} />
          </div>

          <div style={styles.navRing} className="nav-ring" />
          <div style={styles.navRingOuter} className="nav-ring-outer" />
          
          <div style={styles.navItems}>
            {sections.map((section, index) => {
              const baseDistance = getResponsiveValue(90, 110, 130, screenSize);
              const positions = [
                { x: baseDistance, y: 0 },    // Top right
                { x: 0, y: baseDistance },    // Bottom center
                { x: -baseDistance, y: 0 },   // Top left
                { x: 0, y: -baseDistance }    // Top center
              ];
              
              return (
                <div
                  key={index}
                  className="nav-item"
                  style={{
                    ...styles.navItem,
                    ...(activeIndex === index ? styles.navItemActive : {}),
                    transform: `translate(${positions[index].x}px, ${positions[index].y}px)`
                  }}
                  onClick={() => handleSectionClick(section, index)}
                >
                  {section === '¿Quién Soy?' && <PersonIcon />}
                  {section === 'Habilidades' && <SkillsIcon />}
                  {section === 'Contacto' && <ContactIcon />}
                  {section === 'Portafolio' && <PortfolioIcon />}
                  <div style={styles.itemLabel} className="item-label">{section}</div>
                </div>
              );
            })}
          </div>
        </div>

        

        <div style={styles.bottomIndicator}>
          {sections.map((section, index) => {
            // Skip empty sections
            if (!section) return null;
            
            return (
              <div
                key={index}
                style={{
                  ...styles.indicatorDot,
                  ...(activeIndex === index ? styles.indicatorDotActive : {})
                }}
                onClick={() => handleSectionClick(section, index)}
              />
            );
          })}
        </div>
      </nav>
    </>
  );
}
