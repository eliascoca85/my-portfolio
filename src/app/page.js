"use client";

import { useState, useEffect, useRef } from 'react';
import Hero from './components/hero';
import Nav from './components/nav';
import QuienSoy from './components/QuienSoy';
import Habilidades from './components/habilidades';
import Portafolio from './components/portafolio';
import Contacto from './components/contacto';
import { useResponsive, getResponsiveValue } from './hooks/useResponsive';

export default function Home() {
  const [activeSection, setActiveSection] = useState('');
  const [isRadarAudioActive, setIsRadarAudioActive] = useState(false);
  const [isRadarAudioMuted, setIsRadarAudioMuted] = useState(false);
  const radarAudioRef = useRef(null);
  const quickMenuRef = useRef(null);
  const screenSize = useResponsive();
  const sections = ['Contacto', 'Habilidades', 'Portafolio', '¿Quién Soy?'];

  useEffect(() => {
    radarAudioRef.current = new Audio('/audio/retro.ogg');
    radarAudioRef.current.loop = true;
    radarAudioRef.current.volume = 0.35;

    return () => {
      if (radarAudioRef.current) {
        radarAudioRef.current.pause();
        radarAudioRef.current.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    if (!radarAudioRef.current) {
      return;
    }

    radarAudioRef.current.muted = isRadarAudioMuted;
  }, [isRadarAudioMuted]);

  useEffect(() => {
    if (!radarAudioRef.current) {
      return;
    }

    if (isRadarAudioActive) {
      radarAudioRef.current.play().catch(() => {});
    } else {
      radarAudioRef.current.pause();
      radarAudioRef.current.currentTime = 0;
    }
  }, [isRadarAudioActive]);

  useEffect(() => {
    const root = document.documentElement;

    if (!activeSection || !quickMenuRef.current) {
      root.style.setProperty('--quick-menu-height', '0px');
      return;
    }

    const updateMenuHeight = () => {
      if (!quickMenuRef.current) {
        return;
      }
      const rect = quickMenuRef.current.getBoundingClientRect();
      root.style.setProperty('--quick-menu-height', `${Math.ceil(rect.height)}px`);
    };

    updateMenuHeight();

    const resizeObserver = new ResizeObserver(updateMenuHeight);
    resizeObserver.observe(quickMenuRef.current);
    window.addEventListener('resize', updateMenuHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateMenuHeight);
    };
  }, [activeSection, screenSize.isMobile, isRadarAudioActive]);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'Contacto':
        return <Contacto onBack={() => setActiveSection('')} />;
      case 'Habilidades':
        return <Habilidades onBack={() => setActiveSection('')} />;
      case 'Portafolio':
        return <Portafolio onBack={() => setActiveSection('')} />;
      case '¿Quién Soy?':
        return <QuienSoy onBack={() => setActiveSection('')} />;
      default:
        return <Hero />;
    }
  };

  return (
    <div>
      {!activeSection && (
        <Nav
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onRadarStateChange={setIsRadarAudioActive}
          isAudioMuted={isRadarAudioMuted}
          onToggleMute={() => setIsRadarAudioMuted((prev) => !prev)}
          isAudioActive={isRadarAudioActive}
        />
      )}
      {renderActiveSection()}

      {activeSection && (
        <div
          ref={quickMenuRef}
          style={{
            position: 'fixed',
            top: screenSize.isMobile
              ? 'calc(env(safe-area-inset-top, 0px) + 10px)'
              : 'calc(env(safe-area-inset-top, 0px) + 20px)',
            left: screenSize.isMobile ? '8px' : '50%',
            right: screenSize.isMobile ? '8px' : 'auto',
            transform: screenSize.isMobile ? 'none' : 'translateX(-50%)',
            zIndex: 2001,
            display: 'flex',
            gap: getResponsiveValue('6px', '8px', '8px', screenSize),
            flexWrap: screenSize.isMobile ? 'wrap' : 'nowrap',
            alignItems: 'center',
            justifyContent: screenSize.isMobile ? 'center' : 'flex-start',
            width: screenSize.isMobile ? 'auto' : 'fit-content',
            maxWidth: screenSize.isMobile ? 'calc(100vw - 12px)' : 'calc(100vw - 24px)',
            background: 'rgba(0, 0, 0, 0.82)',
            border: '1px solid rgba(255, 255, 255, 0.22)',
            borderRadius: getResponsiveValue('12px', '14px', '14px', screenSize),
            padding: getResponsiveValue('7px 8px', '8px 12px', '8px 12px', screenSize),
            backdropFilter: 'blur(12px)',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.35)',
            overflowX: 'visible',
            whiteSpace: screenSize.isMobile ? 'normal' : 'nowrap',
            boxSizing: 'border-box'
          }}
        >
          {isRadarAudioActive && (
            <button
              type="button"
              onClick={() => setIsRadarAudioMuted((prev) => !prev)}
              style={{
                border: '1px solid rgba(255, 255, 255, 0.35)',
                background: 'rgba(255, 255, 255, 0.08)',
                color: 'white',
                borderRadius: 10,
                padding: getResponsiveValue('6px 9px', '7px 11px', '7px 11px', screenSize),
                cursor: 'pointer',
                fontSize: getResponsiveValue('11px', '12px', '12px', screenSize),
                flex: screenSize.isMobile ? '0 1 auto' : '0 0 auto'
              }}
            >
              {isRadarAudioMuted ? 'Activar Audio' : 'Mutear Audio'}
            </button>
          )}

          <button
            type="button"
            onClick={() => setActiveSection('')}
            style={{
              border: '1px solid rgba(255, 255, 255, 0.35)',
              background: 'rgba(255, 255, 255, 0.12)',
              color: 'white',
              borderRadius: 10,
              padding: getResponsiveValue('6px 9px', '7px 11px', '7px 11px', screenSize),
              cursor: 'pointer',
              fontSize: getResponsiveValue('11px', '12px', '12px', screenSize),
              flex: screenSize.isMobile ? '0 1 auto' : '0 0 auto'
            }}
          >
            Inicio
          </button>

          {sections.map((section) => (
            <button
              key={section}
              type="button"
              onClick={() => setActiveSection(section)}
              style={{
                border: '1px solid rgba(255, 255, 255, 0.35)',
                background: activeSection === section ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                color: 'white',
                borderRadius: 10,
                padding: getResponsiveValue('6px 9px', '7px 11px', '7px 11px', screenSize),
                cursor: 'pointer',
                fontSize: getResponsiveValue('11px', '12px', '12px', screenSize),
                flex: screenSize.isMobile ? '0 1 auto' : '0 0 auto'
              }}
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
