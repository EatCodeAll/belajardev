import React, { useState, useEffect } from 'react';
import Terminal from '../../components/Terminal';
import type { LearningStep } from '../../data/content';
import { ChevronRight, Info, Terminal as TerminalIcon, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LinuxQuestContentProps {
  currentStep: LearningStep;
  isCompleted: boolean;
  onCompleteStep: (id: number) => void;
  onNext: () => void;
}

const LinuxQuestContent: React.FC<LinuxQuestContentProps> = ({ currentStep, isCompleted, onCompleteStep, onNext }) => {
  const [activeTab, setActiveTab] = useState<'learn' | 'terminal'>('learn');
  const [mode, setMode] = useState<'materi' | 'quest'>('materi');
  const [currentDir, setCurrentDir] = useState('/home/user');
  const [fs, setFs] = useState<Record<string, string[]>>({ '/home/user': ['readme.txt'] });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [mode]);

  const handleCommand = (cmdInput: string) => {
    const fullCmd = cmdInput.trim();
    const parts = fullCmd.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const arg1 = parts[1];
    const arg2 = parts[2];

    if (mode === 'quest' && fullCmd === currentStep.quest.command && !isCompleted) {
       onCompleteStep(currentStep.id);
       confetti({ 
         particleCount: 100, 
         spread: 60, 
         origin: { y: 0.7 }, 
         colors: ['#0f172a', '#334155', '#ffffff'] 
       });
    }

    switch (cmd) {
      case 'ls': return (fs[currentDir] || []).join('  ');
      case 'pwd': return currentDir;
      case 'whoami': return 'user';
      case 'date': return new Date().toString();
      case 'echo': return parts.slice(1).join(' ');
      case 'cat':
        if (!arg1) return 'cat: missing file operand';
        if ((fs[currentDir] || []).includes(arg1)) {
          if (arg1 === 'readme.txt') return 'Selamat datang di Linux! Gunakan terminal ini untuk belajar.';
          if (arg1 === 'final.txt') return 'Linux adalah sistem operasi open-source yang sangat powerfull.';
          return `Isi file ${arg1} kosong atau terenkripsi.`;
        }
        return `cat: ${arg1}: No such file or directory`;
      case 'mkdir': {
        if (!arg1) return 'mkdir: missing operand';
        setFs(prev => ({ ...prev, [currentDir]: [...(prev[currentDir] || []), arg1], [`${currentDir}/${arg1}`]: [] }));
        return '';
      }
      case 'touch': {
        if (!arg1) return 'touch: missing file operand';
        setFs(prev => ({ ...prev, [currentDir]: [...(prev[currentDir] || []), arg1] }));
        return '';
      }
      case 'cd': {
        if (!arg1 || arg1 === '~') { setCurrentDir('/home/user'); return ''; }
        const target = arg1 === '..' ? currentDir.substring(0, currentDir.lastIndexOf('/')) || '/' : (currentDir === '/' ? `/${arg1}` : `${currentDir}/${arg1}`);
        if (fs[target]) { setCurrentDir(target); return ''; }
        return `cd: ${arg1}: No such directory`;
      }
      case 'rm': {
        if (!arg1) return 'rm: missing operand';
        setFs(prev => ({ ...prev, [currentDir]: (prev[currentDir] || []).filter(f => f !== arg1) }));
        return '';
      }
      case 'rmdir': {
        if (!arg1) return 'rmdir: missing operand';
        const target = currentDir === '/' ? `/${arg1}` : `${currentDir}/${arg1}`;
        if (fs[target] && (fs[target].length === 0)) {
           setFs(prev => {
             const next = { ...prev };
             delete next[target];
             next[currentDir] = (next[currentDir] || []).filter(f => f !== arg1);
             return next;
           });
           return '';
        }
        return `rmdir: failed to remove '${arg1}': Directory not empty or doesn't exist`;
      }
      case 'cp': {
        if (!arg1 || !arg2) return 'cp: missing file operand';
        setFs(prev => ({ ...prev, [currentDir]: [...(prev[currentDir] || []), arg2] }));
        return '';
      }
      case 'mv': {
        if (!arg1 || !arg2) return 'mv: missing file operand';
        setFs(prev => ({ ...prev, [currentDir]: (prev[currentDir] || []).map(f => f === arg1 ? arg2 : f) }));
        return '';
      }
      case 'head':
      case 'tail':
        if (!arg1) return `${cmd}: missing file operand`;
        return `(Menampilkan bagian ${cmd === 'head' ? 'awal' : 'akhir'} file ${arg1})\nBaris 1: Konten simulasi...\nBaris 2: Belajar Linux itu mudah.`;
      case 'grep':
        if (!arg1 || !arg2) return 'grep: usage: grep [pattern] [file]';
        return `(Mencari "${arg1}" di ${arg2})\nMenemukan kecocokan pada baris 42: ...${arg1}...`;
      case 'sudo':
        if (!arg1) return 'usage: sudo [command]';
        return handleCommand(parts.slice(1).join(' '));
      case 'exit': return 'TERMINAL_EXIT';
      case 'clear': return 'TERMINAL_CLEAR';
      case 'help': return 'Commands: ls, pwd, cd, mkdir, touch, rm, rmdir, cp, mv, cat, echo, whoami, date, head, tail, grep, sudo, clear, exit';
      default: return `bash: ${cmd}: command not found`;
    }
  };

  if (mode === 'materi') {
    return (
      <div className="flex flex-col gap-6 animate-in fade-in duration-500">
        <div className="bento-box p-6 md:p-10 bg-white">
          <div className="flex items-center gap-3 mb-8">
             <div className="w-10 h-10 bg-slate-50 text-slate-900 rounded-lg flex items-center justify-center border border-slate-100">
                <BookOpen size={20} />
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Materi Belajar</span>
                <h4 className="text-lg font-bold text-slate-900 tracking-tight">Eksplorasi Linux</h4>
             </div>
          </div>
          <div className="space-y-4 mb-10">
            {currentStep.materi.paragraphs.map((p: string, i: number) => (
              <p key={i} className="text-base text-slate-600 leading-relaxed font-medium">{p}</p>
            ))}
          </div>
          <button 
            onClick={() => { setMode('quest'); setActiveTab('terminal'); }}
            className="btn-base btn-indigo w-full py-3.5"
          >
            Buka Terminal <TerminalIcon size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-500">
      {/* Mobile Tab Switcher */}
      <div className="flex p-1 bg-slate-100 rounded-xl lg:hidden">
        <button 
          onClick={() => setActiveTab('learn')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'learn' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
        >
          Mission
        </button>
        <button 
          onClick={() => setActiveTab('terminal')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'terminal' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
        >
          Terminal
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-stretch">
        <div className={`flex flex-col gap-4 ${activeTab === 'terminal' ? 'hidden lg:flex' : 'flex'}`}>
          <div className="bento-box p-6 border-l-4 border-l-slate-900 h-full">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">L</div>
              <h3 className="font-bold text-slate-900">{currentStep.title}</h3>
            </div>
            <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">{currentStep.quest.instruction}</p>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mb-8">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-4"><Info size={12} /> Documentation</h4>
              <div className="space-y-4">
                {Object.entries(currentStep.quest.explanation).map(([cmd, desc]) => (
                  <div key={cmd} className="flex flex-col gap-1">
                    <code className="text-slate-900 font-bold text-[10px] bg-slate-200/50 px-1.5 py-0.5 rounded w-fit">{cmd}</code>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button onClick={() => setActiveTab('terminal')} className="lg:hidden btn-base btn-indigo w-full py-2.5 text-xs">Open Terminal</button>
              <div className="flex gap-3">
                <button onClick={() => setMode('materi')} className="btn-base btn-subtle flex-1 py-2.5 text-xs">Review Theory</button>
                <button 
                  disabled={!isCompleted} 
                  onClick={onNext} 
                  className={`btn-base btn-indigo flex-1 py-2.5 text-xs ${!isCompleted ? 'opacity-20' : ''}`}
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex flex-col gap-4 ${activeTab === 'learn' ? 'hidden lg:flex' : 'flex'}`}>
          <div className="bento-box overflow-hidden h-[450px]"><Terminal onCommand={handleCommand} /></div>
          <div className="bento-box px-4 py-3 flex justify-between items-center bg-slate-50 border-none">
             <div className="flex items-center gap-2"><TerminalIcon size={12} className="text-slate-400" /><span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Path</span></div>
             <div className="text-[10px] font-mono font-bold text-slate-600">{currentDir}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinuxQuestContent;
