"use client";

import { useResponsive, getResponsiveValue } from '../hooks/useResponsive';

export default function Hero() {
  const screenSize = useResponsive();

  const heroStyles = {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #000, #1a1a1a)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: getResponsiveValue('20px', '40px', '60px', screenSize)
  };

  const contentStyles = {
    textAlign: 'center',
    color: '#fff',
    zIndex: 10,
    position: 'relative',
    maxWidth: '100%',
    padding: getResponsiveValue('0 15px', '0 25px', '0 40px', screenSize)
  };

  const titleStyles = {
    fontSize: getResponsiveValue('2rem', '3rem', '4rem', screenSize),
    fontWeight: 'bold',
    marginBottom: '1rem',
    background: 'linear-gradient(45deg, #fff, #ccc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: 1.2
  };

  const subtitleStyles = {
    fontSize: getResponsiveValue('1rem', '1.25rem', '1.5rem', screenSize),
    opacity: 0.8,
    marginBottom: '2rem',
    lineHeight: 1.4
  };

  return (
    <div style={heroStyles}>
      <div style={contentStyles}>
        <h1 style={titleStyles}>
          Elias Portfolio
        </h1>
        <p style={subtitleStyles}>
          Desarrollador Web & Diseñador UI/UX
        </p>
      </div>
    </div>
  );
}