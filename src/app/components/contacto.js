"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useResponsive, getResponsiveValue } from '../hooks/useResponsive';

export default function Contacto({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);
  const screenSize = useResponsive();
  const jotformEmbedUrl = 'https://form.jotform.com/260796279290066?isIframeEmbed=1';
  const defaultContactMessage = encodeURIComponent('hola, me gustaria una cotizacion');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactMethods = [
    {
      icon: "📧",
      label: "EMAIL",
      value: "eliascoca85@gmail.com",
      action: `https://mail.google.com/mail/?view=cm&fs=1&to=eliascoca85@gmail.com&su=Cotizacion&body=${defaultContactMessage}`
    },
    {
      icon: "💼",
      label: "LINKEDIN",
      value: "/in/mauricio-coca85",
      action: "https://www.linkedin.com/in/mauricio-coca85"
    },
    {
      icon: "/images/github.svg",
      label: "GITHUB",
      value: "@eliascoca85",
      action: "https://github.com/eliascoca85",
      isImage: true
    },
    {
      icon: "📱",
      label: "WHATSAPP",
      value: "+591 68538548",
      action: `https://wa.me/59168538548?text=${defaultContactMessage}`
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
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Courier New', 'Consolas', monospace",
      color: 'white',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.5s ease',
      zIndex: 1000,
      padding: getResponsiveValue('8px', '25px', '40px', screenSize),
      overflowY: 'auto'
    },
    mainContent: {
      maxWidth: '1200px',
      padding: getResponsiveValue('0 8px', '0 25px', '0 40px', screenSize),
      width: '100%',
      marginTop: getResponsiveValue('360px', '122px', '126px', screenSize)
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
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: screenSize.isMobile ? '1fr' : '1fr 1fr',
      gap: getResponsiveValue('12px', '30px', '40px', screenSize),
      alignItems: 'start'
    },
    contactMethods: {
      display: 'flex',
      flexDirection: 'column',
      gap: getResponsiveValue('12px', '13px', '15px', screenSize),
      order: screenSize.isMobile ? 1 : 1
    },
    methodCard: {
      background: 'rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '10px',
      padding: getResponsiveValue('15px', '18px', '20px', screenSize),
      backdropFilter: 'blur(10px)',
      transition: 'background 0.2s ease',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit'
    },
    methodHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: getResponsiveValue('12px', '13px', '15px', screenSize),
      marginBottom: '8px'
    },
    methodIcon: {
      fontSize: getResponsiveValue('16px', '18px', '20px', screenSize),
      width: getResponsiveValue('32px', '36px', '40px', screenSize),
      height: getResponsiveValue('32px', '36px', '40px', screenSize),
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    methodIconSvg: {
      width: getResponsiveValue('16px', '18px', '20px', screenSize),
      height: getResponsiveValue('16px', '18px', '20px', screenSize),
      filter: 'invert(1) brightness(0.9)'
    },
    methodLabel: {
      fontSize: getResponsiveValue('12px', '13px', '14px', screenSize),
      fontWeight: 'bold',
      letterSpacing: '1px'
    },
    methodValue: {
      fontSize: getResponsiveValue('10px', '11px', '12px', screenSize),
      color: 'rgba(255, 255, 255, 0.8)',
      letterSpacing: '0.5px',
      marginLeft: getResponsiveValue('44px', '49px', '55px', screenSize)
    },
    contactForm: {
      background: 'rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '15px',
      padding: getResponsiveValue('12px', '25px', '30px', screenSize),
      backdropFilter: 'blur(10px)',
      order: screenSize.isMobile ? 2 : 2,
      width: screenSize.isMobile ? '100%' : '92%',
      maxWidth: screenSize.isMobile ? '100%' : '560px',
      justifySelf: screenSize.isMobile ? 'stretch' : 'center'
    },
    formTitle: {
      fontSize: getResponsiveValue('16px', '17px', '18px', screenSize),
      fontWeight: 'bold',
      letterSpacing: getResponsiveValue('1.5px', '1.8px', '2px', screenSize),
      marginBottom: getResponsiveValue('20px', '22px', '25px', screenSize),
      textAlign: 'center'
    },
    jotformWrap: {
      width: '100%',
      border: '1px solid rgba(255, 255, 255, 0.22)',
      borderRadius: '10px',
      overflowY: 'auto',
      overflowX: 'hidden',
      background: 'rgba(255, 255, 255, 0.02)',
      maxHeight: getResponsiveValue('420px', '540px', '580px', screenSize),
      scrollbarWidth: 'thin',
      scrollbarColor: 'rgba(0, 255, 180, 0.65) rgba(255, 255, 255, 0.06)'
    },
    jotformFrame: {
      width: '100%',
      height: getResponsiveValue('880px', '980px', '1040px', screenSize),
      border: '0',
      display: 'block'
    },
    backButton: {
      position: 'fixed',
      top: `calc(env(safe-area-inset-top, 0px) + ${getResponsiveValue('100px', '84px', '92px', screenSize)})`,
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
          <h1 style={styles.title}>Contacto</h1>
          <p style={styles.subtitle}>Conectemos & Colaboremos</p>
        </div>

        <div style={styles.contentGrid}>
          <div style={styles.contactMethods}>
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.methodCard}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.05)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.8)'}
              >
                <div style={styles.methodHeader}>
                  <div style={styles.methodIcon}>
                    {method.isImage ? (
                      <Image
                        src={method.icon}
                        alt={method.label}
                        width={20}
                        height={20}
                        style={styles.methodIconSvg}
                      />
                    ) : (
                      method.icon
                    )}
                  </div>
                  <div style={styles.methodLabel}>
                    {method.label}
                  </div>
                </div>
                <div style={styles.methodValue}>
                  {method.value}
                </div>
              </a>
            ))}
          </div>

          <div style={styles.contactForm}>
            <h3 style={styles.formTitle}>Enviar Mensaje</h3>

            <div style={styles.jotformWrap} className="jotform-scroll-shell">
              <iframe
                title="Formulario de contacto Jotform"
                src={jotformEmbedUrl}
                style={styles.jotformFrame}
                allow="geolocation; microphone; camera; fullscreen"
              />
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .jotform-scroll-shell::-webkit-scrollbar {
          width: 9px;
        }

        .jotform-scroll-shell::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.06);
          border-radius: 999px;
        }

        .jotform-scroll-shell::-webkit-scrollbar-thumb {
          border-radius: 999px;
          border: 2px solid rgba(0, 0, 0, 0.65);
          background: linear-gradient(
            180deg,
            rgba(0, 255, 180, 0.85) 0%,
            rgba(0, 190, 255, 0.55) 75%,
            rgba(0, 255, 180, 0.35) 100%
          );
          box-shadow: 0 0 10px rgba(0, 255, 180, 0.18);
        }

        .jotform-scroll-shell::-webkit-scrollbar-thumb:hover {
          box-shadow: 0 0 14px rgba(0, 255, 180, 0.28);
        }
      `}</style>
    </div>
  );
}
