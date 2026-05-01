import React from 'react';
import { BookOpen, Zap, RefreshCw } from 'lucide-react';
import Auth from './Auth';

interface HeaderProps {
  xp: number;
  onHomeClick: () => void;
  onResetProgress: () => void;
}

const Header: React.FC<HeaderProps> = ({ xp, onHomeClick, onResetProgress }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-[60] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          onClick={onHomeClick}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
            <BookOpen size={16} className="text-white" />
          </div>
          <span className="font-bold text-slate-900 tracking-tight text-sm">BelajarDev</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-3">
            <div className="flex items-center gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-slate-50 border border-slate-200 rounded-lg">
              <Zap size={12} className="text-amber-500 fill-amber-500 sm:w-3.5 sm:h-3.5" />
              <span className="font-bold text-slate-700 text-[10px] sm:text-xs">{xp} XP</span>
            </div>
            <button 
              onClick={() => { if(confirm('Hapus semua progres belajar?')) onResetProgress(); }} 
              className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
              title="Reset Progres"
            >
              <RefreshCw size={14} className="sm:w-4 sm:h-4" />
            </button>
          </div>
          
          <div className="w-[1px] h-5 bg-slate-200 hidden md:block"></div>
          
          <Auth />
        </div>
      </div>
    </header>
  );
};

export default Header;
