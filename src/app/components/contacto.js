"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Contacto({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      alignItems: 'start'
    },
    contactMethods: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    },
    methodCard: {
      background: 'rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '10px',
      padding: '20px',
      backdropFilter: 'blur(10px)',
      transition: 'background 0.2s ease',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit'
    },
    methodHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '8px'
    },
    methodIcon: {
      fontSize: '20px',
      width: '40px',
      height: '40px',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    methodIconSvg: {
      width: '20px',
      height: '20px',
      filter: 'invert(1) brightness(0.9)'
    },
    methodLabel: {
      fontSize: '14px',
      fontWeight: 'bold',
      letterSpacing: '1px'
    },
    methodValue: {
      fontSize: '12px',
      color: 'rgba(255, 255, 255, 0.8)',
      letterSpacing: '0.5px',
      marginLeft: '55px'
    },
    contactForm: {
      background: 'rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '15px',
      padding: '30px',
      backdropFilter: 'blur(10px)'
    },
    formTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      letterSpacing: '2px',
      marginBottom: '25px',
      textAlign: 'center'
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      fontSize: '12px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      marginBottom: '8px',
      color: 'rgba(255, 255, 255, 0.9)',
      textTransform: 'uppercase'
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '8px',
      color: 'white',
      fontSize: '14px',
      fontFamily: "'Courier New', 'Consolas', monospace",
      letterSpacing: '0.5px',
      outline: 'none',
      transition: 'border-color 0.2s ease'
    },
    textarea: {
      minHeight: '100px',
      resize: 'vertical'
    },
    submitButton: {
      width: '100%',
      padding: '15px',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '8px',
      color: 'white',
      fontSize: '14px',
      fontWeight: 'bold',
      letterSpacing: '2px',
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
