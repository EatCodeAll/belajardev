import React from 'react';
import { Code, Terminal as TerminalIcon, ChevronRight, Zap, Target } from 'lucide-react';

interface HomeProps {
  setActiveModule: (module: 'home' | 'html' | 'linux') => void;
  xp: number;
  completedHtml: number[];
  completedLinux: number[];
}

const Home: React.FC<HomeProps> = ({ setActiveModule, xp, completedHtml, completedLinux }) => {
  const totalSteps = 40;
  const completedSteps = completedHtml.length + completedLinux.length;
  const progressPercent = Math.round((completedSteps / totalSteps) * 100);

  return (
    <div className="animate-in fade-in duration-700 max-w-5xl mx-auto">
      {/* Minimal Hero Section */}
      <div className="flex flex-col items-center text-center mb-16 mt-8 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-[10px] font-bold mb-6 border border-slate-100 uppercase tracking-widest">
           <Target size={12} /> Interactive Lab Platform
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
          Kuasai Skill Developer <br /> 
          <span className="text-slate-500">Secara Praktis & Cepat.</span>
        </h1>
        <p className="text-base md:text-lg text-slate-500 max-w-xl font-medium leading-relaxed mb-10">
          Pilih modul belajarmu, selesaikan misi interaktif, dan tingkatkan XP kamu hari ini.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {/* HTML Module Card */}
        <div 
          onClick={() => setActiveModule('html')} 
          className="bento-box p-8 flex flex-col cursor-pointer group hover:border-slate-300 transition-all"
        >
          <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Code size={24} className="text-white" />
          </div>
          <div className="mt-auto">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
               {completedHtml.length} / 20 Misi Selesai
            </div>
            <h3 className="text-2xl font-bold mb-2 text-slate-900">HTML Foundation</h3>
            <p className="text-sm text-slate-500 mb-6 font-medium">Pelajari struktur dasar web modern dengan tantangan langsung.</p>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-3 transition-all">
              Mulai Belajar <ChevronRight size={16} />
            </div>
          </div>
        </div>

        {/* Linux Module Card */}
        <div 
          onClick={() => setActiveModule('linux')} 
          className="bento-box p-8 flex flex-col cursor-pointer group hover:border-slate-300 transition-all border-slate-100"
        >
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <TerminalIcon size={24} className="text-white" />
          </div>
          <div className="mt-auto">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
              {completedLinux.length} / 20 Perintah Selesai
            </div>
            <h3 className="text-2xl font-bold mb-2 text-slate-900">Linux Systems</h3>
            <p className="text-sm text-slate-500 mb-6 font-medium">Kuasai terminal dan perintah dasar Linux dalam lingkungan simulasi.</p>
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 group-hover:gap-3 transition-all">
              Buka Terminal <ChevronRight size={16} />
            </div>
          </div>
        </div>

        {/* Stats & Progress - Combined for Cleanliness */}
        <div className="bento-box p-8 md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-50 border-none shadow-none">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-200">
              <Zap size={24} className="text-amber-500 fill-amber-500" />
            </div>
            <div>
              <div className="text-3xl font-black text-slate-900">{xp}</div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total XP Kamu</p>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="flex justify-between items-center mb-2">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Keseluruhan Progres</span>
               <span className="text-xs font-bold text-slate-900">{progressPercent}%</span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
               <div 
                className="h-full bg-slate-900 rounded-full transition-all duration-1000" 
                style={{ width: `${progressPercent}%` }}
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
