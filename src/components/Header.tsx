import React from 'react';
import { BookOpen, Zap, RefreshCw } from 'lucide-react';

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

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">
            <Zap size={14} className="text-amber-500 fill-amber-500" />
            <span className="font-bold text-slate-700 text-xs">{xp} XP</span>
          </div>
          <button 
            onClick={() => { if(confirm('Hapus semua progres belajar?')) onResetProgress(); }} 
            className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
            title="Reset Progres"
          >
            <RefreshCw size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
