"use client";

import { useState } from 'react';
import Hero from './components/hero';
import Nav from './components/nav';
import QuienSoy from './components/QuienSoy';
import Habilidades from './components/habilidades';
import Portafolio from './components/portafolio';
import Contacto from './components/contacto';

export default function Home() {
  const [activeSection, setActiveSection] = useState('');

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
      <Nav activeSection={activeSection} onSectionChange={setActiveSection} />
      {renderActiveSection()}
    </div>
  );
}
