"use client";

export default function Hero() {
  const heroStyles = {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #000, #1a1a1a)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden'
  };

  const contentStyles = {
    textAlign: 'center',
    color: '#fff',
    zIndex: 10,
    position: 'relative'
  };

  const titleStyles = {
    fontSize: 'clamp(2rem, 5vw, 4rem)',
    fontWeight: 'bold',
    marginBottom: '1rem',
    background: 'linear-gradient(45deg, #fff, #ccc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const subtitleStyles = {
    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
    opacity: 0.8,
    marginBottom: '2rem'
  };

  const backgroundEffectStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)',
    pointerEvents: 'none'
  };

  return (
    <div style={heroStyles}>
      <div style={backgroundEffectStyles}></div>
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