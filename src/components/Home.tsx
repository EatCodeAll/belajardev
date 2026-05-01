import React, { useState } from 'react';
import { Code, Terminal as TerminalIcon, ChevronRight, Zap, Target, Palette, Braces, Lock, Crown } from 'lucide-react';
import ProModal from './ProModal';

interface HomeProps {
  setActiveModule: (module: 'home' | 'html' | 'linux' | 'css' | 'js') => void;
  xp: number;
  completedHtml: number[];
  completedLinux: number[];
  completedCss: number[];
  completedJs: number[];
}

const Home: React.FC<HomeProps> = ({ setActiveModule, xp, completedHtml, completedLinux, completedCss, completedJs }) => {
  const [proModalOpen, setProModalOpen] = useState(false);
  const [selectedProModule, setSelectedProModule] = useState('');

  const totalSteps = 40 + 2 + 2; // Total of all current free modules
  const completedSteps = completedHtml.length + completedLinux.length + completedCss.length + completedJs.length;
  const progressPercent = Math.round((completedSteps / totalSteps) * 100) || 0;

  // Prerequisite logic for Locking Modules
  const isHtmlDone = completedHtml.length >= 5;

  const modules = [
    {
      id: 'html',
      title: 'HTML Foundation',
      desc: 'Pelajari struktur dasar web modern.',
      icon: <Code size={24} className="text-white" />,
      bg: 'bg-slate-900',
      count: completedHtml.length,
      total: 20,
      locked: false,
      isPro: false
    },
    {
      id: 'css',
      title: 'CSS Basics',
      desc: 'Seni menghias dan mengatur layout web.',
      icon: <Palette size={24} className="text-white" />,
      bg: 'bg-indigo-600',
      count: completedCss.length,
      total: 2,
      locked: !isHtmlDone,
      req: 'Selesaikan 5 Misi HTML',
      isPro: false
    },
    {
      id: 'js',
      title: 'JS Basics',
      desc: 'Berikan otak dan logika pada website kamu.',
      icon: <Braces size={24} className="text-white" />,
      bg: 'bg-amber-500',
      count: completedJs.length,
      total: 2,
      locked: !isHtmlDone,
      req: 'Selesaikan 5 Misi HTML',
      isPro: false
    },
    {
      id: 'linux',
      title: 'Linux Systems',
      desc: 'Kuasai terminal dan perintah dasar OS.',
      icon: <TerminalIcon size={24} className="text-white" />,
      bg: 'bg-emerald-600',
      count: completedLinux.length,
      total: 20,
      locked: false,
      isPro: false
    },
    {
      id: 'advanced-css',
      title: 'Advanced CSS Grid',
      desc: 'Kuasai layout kompleks dan animasi modern.',
      icon: <Palette size={24} className="text-white" />,
      bg: 'bg-slate-800',
      count: 0,
      total: 15,
      locked: false,
      isPro: true
    },
    {
      id: 'react-intro',
      title: 'React Framework',
      desc: 'Membangun UI interaktif dengan React JS.',
      icon: <Code size={24} className="text-white" />,
      bg: 'bg-slate-800',
      count: 0,
      total: 25,
      locked: false,
      isPro: true
    }
  ];

  const handleModuleClick = (m: any) => {
    if (m.isPro) {
      setSelectedProModule(m.title);
      setProModalOpen(true);
    } else if (!m.locked) {
      setActiveModule(m.id as any);
    }
  };

  return (
    <>
      <div className="animate-in fade-in duration-700 max-w-5xl mx-auto pb-10">
        <div className="flex flex-col items-center text-center mb-12 mt-4 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 text-slate-900 rounded-full text-[10px] font-black mb-6 border border-slate-100 uppercase tracking-widest">
             <Target size={12} className="text-emerald-500" /> Learning Dashboard
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Pilih Jalur Belajarmu.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-12">
          {modules.map((m) => (
            <div 
              key={m.id}
              onClick={() => handleModuleClick(m)} 
              className={`bento-box p-8 flex flex-col transition-all relative group ${m.locked && !m.isPro ? 'opacity-60 grayscale cursor-not-allowed' : 'cursor-pointer hover:border-slate-300'}`}
            >
              {m.isPro && (
                <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-400 to-amber-500 p-2 rounded-lg text-amber-950 shadow-lg shadow-amber-200 group-hover:scale-110 transition-transform">
                  <Crown size={16} />
                </div>
              )}

              {m.locked && !m.isPro && (
                <div className="absolute top-6 right-6 bg-slate-100 p-2 rounded-lg text-slate-400">
                  <Lock size={16} />
                </div>
              )}
              
              <div className={`w-12 h-12 ${m.bg} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform ${m.isPro ? 'opacity-70' : ''}`}>
                {m.icon}
              </div>

              <div className="mt-auto">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex justify-between items-center">
                   <span>{m.isPro ? 'PRO MODULE' : `${m.count} / ${m.total} Misi Selesai`}</span>
                   {m.locked && !m.isPro && <span className="text-rose-500 font-black">{m.req}</span>}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900 flex items-center gap-2">
                  {m.title}
                </h3>
                <p className="text-sm text-slate-700 font-bold mb-6">{m.desc}</p>
                
                {m.isPro ? (
                   <div className="flex items-center gap-2 text-sm font-black text-amber-600 group-hover:gap-3 transition-all uppercase tracking-wider">
                    Upgrade untuk Akses <Crown size={16} />
                  </div>
                ) : !m.locked ? (
                  <div className="flex items-center gap-2 text-sm font-black text-slate-900 group-hover:gap-3 transition-all uppercase tracking-wider">
                    Mulai Belajar <ChevronRight size={16} />
                  </div>
                ) : (
                  <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Akses Terkunci</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="px-4">
          <div className="bento-box p-8 flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-900 border-none shadow-none text-white">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                <Zap size={24} className="text-amber-400 fill-amber-400" />
              </div>
              <div>
                <div className="text-3xl font-black">{xp}</div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total XP Terkumpul</p>
              </div>
            </div>

            <div className="flex-1 w-full max-w-md">
              <div className="flex justify-between items-center mb-2">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Kemajuan Karir</span>
                 <span className="text-xs font-bold">{progressPercent}%</span>
              </div>
              <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                 <div 
                  className="h-full bg-emerald-500 rounded-full transition-all duration-1000" 
                  style={{ width: `${progressPercent}%` }}
                 />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProModal 
        isOpen={proModalOpen} 
        onClose={() => setProModalOpen(false)} 
        moduleName={selectedProModule}
      />
    </>
  );
};

export default Home;
