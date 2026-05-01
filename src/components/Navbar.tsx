import React from 'react';
import { Home, Code, Terminal as TerminalIcon } from 'lucide-react';

interface NavbarProps {
  activeModule: 'home' | 'html' | 'linux';
  setActiveModule: (module: 'home' | 'html' | 'linux') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeModule, setActiveModule }) => {
  return (
    <nav className="floating-nav">
      <button 
        onClick={() => setActiveModule('home')} 
        className={`nav-link ${activeModule === 'home' ? 'nav-link-active' : ''}`}
      >
        <Home size={18} /> <span className="hidden sm:inline">Beranda</span>
      </button>
      <div className="w-[1px] h-6 bg-slate-200 mx-1 hidden sm:block"></div>
      <button 
        onClick={() => setActiveModule('html')} 
        className={`nav-link ${activeModule === 'html' ? 'nav-link-active' : ''}`}
      >
        <Code size={18} /> <span className="hidden sm:inline">HTML</span>
      </button>
      <button 
        onClick={() => setActiveModule('linux')} 
        className={`nav-link ${activeModule === 'linux' ? 'nav-link-active' : ''}`}
      >
        <TerminalIcon size={18} /> <span className="hidden sm:inline">Linux</span>
      </button>
    </nav>
  );
};

export default Navbar;
