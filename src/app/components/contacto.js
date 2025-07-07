"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useResponsive, getResponsiveValue } from '../hooks/useResponsive';

export default function Contacto({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const screenSize = useResponsive();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactMethods = [
    {
      icon: "📧",
      label: "EMAIL",
      value: "eliascoca85@gmail.com",
      action: "mailto:eliascoca85@gmail.com"
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
      action: "https://wa.me/68538548"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ nombre: '', email: '', mensaje: '' });
      alert('Mensaje enviado correctamente!');
    }, 800);
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
      padding: getResponsiveValue('15px', '25px', '40px', screenSize),
      overflowY: 'auto'
    },
    mainContent: {
      maxWidth: '1200px',
      padding: getResponsiveValue('0 15px', '0 25px', '0 40px', screenSize),
      width: '100%'
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
      gap: getResponsiveValue('20px', '30px', '40px', screenSize),
      alignItems: 'start'
    },
    contactMethods: {
      display: 'flex',
      flexDirection: 'column',
      gap: getResponsiveValue('12px', '13px', '15px', screenSize),
      order: screenSize.isMobile ? 2 : 1
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
      padding: getResponsiveValue('20px', '25px', '30px', screenSize),
      backdropFilter: 'blur(10px)',
      order: screenSize.isMobile ? 1 : 2
    },
    formTitle: {
      fontSize: getResponsiveValue('16px', '17px', '18px', screenSize),
      fontWeight: 'bold',
      letterSpacing: getResponsiveValue('1.5px', '1.8px', '2px', screenSize),
      marginBottom: getResponsiveValue('20px', '22px', '25px', screenSize),
      textAlign: 'center'
    },
    formGroup: {
      marginBottom: getResponsiveValue('15px', '17px', '20px', screenSize)
    },
    label: {
      display: 'block',
      fontSize: getResponsiveValue('10px', '11px', '12px', screenSize),
      fontWeight: 'bold',
      letterSpacing: '1px',
      marginBottom: '8px',
      color: 'rgba(255, 255, 255, 0.9)',
      textTransform: 'uppercase'
    },
    input: {
      width: '100%',
      padding: getResponsiveValue('10px 12px', '11px 13px', '12px 15px', screenSize),
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '8px',
      color: 'white',
      fontSize: getResponsiveValue('12px', '13px', '14px', screenSize),
      fontFamily: "'Courier New', 'Consolas', monospace",
      letterSpacing: '0.5px',
      outline: 'none',
      transition: 'border-color 0.2s ease'
    },
    textarea: {
      minHeight: getResponsiveValue('80px', '90px', '100px', screenSize),
      resize: 'vertical'
    },
    submitButton: {
      width: '100%',
      padding: getResponsiveValue('12px', '13px', '15px', screenSize),
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '8px',
      color: 'white',
      fontSize: getResponsiveValue('12px', '13px', '14px', screenSize),
      fontWeight: 'bold',
      letterSpacing: getResponsiveValue('1.5px', '1.8px', '2px', screenSize),
      textTransform: 'uppercase',
      cursor: 'pointer',
      transition: 'background 0.2s ease',
      fontFamily: "'Courier New', 'Consolas', monospace"
    },
    submitButtonDisabled: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      color: 'rgba(255, 255, 255, 0.3)',
      cursor: 'not-allowed'
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

          <form style={styles.contactForm} onSubmit={handleSubmit}>
            <h3 style={styles.formTitle}>Enviar Mensaje</h3>
            
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="nombre">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                style={styles.input}
                required
                placeholder="Tu nombre"
                onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
                required
                placeholder="tu@email.com"
                onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="mensaje">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                style={{...styles.input, ...styles.textarea}}
                required
                placeholder="Tu mensaje aquí..."
                onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                ...styles.submitButton,
                ...(isSubmitting ? styles.submitButtonDisabled : {})
              }}
              onMouseEnter={(e) => !isSubmitting && (e.target.style.background = 'rgba(255, 255, 255, 0.2)')}
              onMouseLeave={(e) => !isSubmitting && (e.target.style.background = 'rgba(255, 255, 255, 0.1)')}
            >
              {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        input::placeholder,
        textarea::placeholder {
          color: rgba(255, 255, 255, 0.4);
          font-family: 'Courier New', 'Consolas', monospace;
        }
      `}</style>
    </div>
  );
}
