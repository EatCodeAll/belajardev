import React from 'react';
import { Home, Code, Terminal as TerminalIcon, Palette, Braces } from 'lucide-react';

interface NavbarProps {
  activeModule: 'home' | 'html' | 'linux' | 'css' | 'js';
  setActiveModule: (module: 'home' | 'html' | 'linux' | 'css' | 'js') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeModule, setActiveModule }) => {
  return (
    <nav className="floating-nav">
      <button onClick={() => setActiveModule('home')} className={`nav-link ${activeModule === 'home' ? 'nav-link-active' : ''}`}>
        <Home size={16} /> <span className="hidden md:inline">Beranda</span>
      </button>
      <div className="w-[1px] h-4 bg-slate-200 mx-1"></div>
      <button onClick={() => setActiveModule('html')} className={`nav-link ${activeModule === 'html' ? 'nav-link-active' : ''}`}>
        <Code size={16} /> <span className="hidden md:inline">HTML</span>
      </button>
      <button onClick={() => setActiveModule('css')} className={`nav-link ${activeModule === 'css' ? 'nav-link-active' : ''}`}>
        <Palette size={16} /> <span className="hidden md:inline">CSS</span>
      </button>
      <button onClick={() => setActiveModule('js')} className={`nav-link ${activeModule === 'js' ? 'nav-link-active' : ''}`}>
        <Braces size={16} /> <span className="hidden md:inline">JS</span>
      </button>
      <button onClick={() => setActiveModule('linux')} className={`nav-link ${activeModule === 'linux' ? 'nav-link-active' : ''}`}>
        <TerminalIcon size={16} /> <span className="hidden md:inline">Linux</span>
      </button>
    </nav>
  );
};

export default Navbar;
