import React, { useState, useEffect } from 'react';
import Editor from '../../components/Editor';
import { Rocket, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

import type { LearningStep } from '../../data/content';

interface QuestContentProps {
  currentStep: LearningStep;
  isCompleted: boolean;
  onCompleteStep: (id: number) => void;
  onNext: () => void;
}

const QuestContent: React.FC<QuestContentProps> = ({ currentStep, isCompleted, onCompleteStep, onNext }) => {
  const [code, setCode] = useState(currentStep.quest.initialCode || '');
  const [activeTab, setActiveTab] = useState<'quest' | 'preview'>('quest');
  const [mode, setMode] = useState<'materi' | 'quest'>('materi');

  useEffect(() => {
    if (mode === 'quest' && !isCompleted && currentStep.quest.validation?.(code)) {
      onCompleteStep(currentStep.id);
      confetti({ 
        particleCount: 80, 
        spread: 50, 
        origin: { y: 0.8 },
        colors: ['#0f172a', '#334155', '#ffffff']
      });
    }
  }, [code, currentStep, onCompleteStep, isCompleted, mode]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [mode]);

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
                <h4 className="text-lg font-bold text-slate-900 tracking-tight">Pahami Konsepnya</h4>
             </div>
          </div>

          <div className="space-y-4 mb-10">
            {currentStep.materi.paragraphs.map((p: string, i: number) => (
              <p key={i} className="text-base text-slate-600 leading-relaxed font-medium">
                {p}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={() => setMode('quest')}
              className="btn-base btn-indigo w-full py-3.5"
            >
              Mulai Tantangan <Rocket size={18} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const getScopedCode = (rawCode: string) => {
    // If there's no <style> tag, return as is
    if (!rawCode.includes('<style>')) return rawCode;

    try {
      // Simple regex to find style tags and scope their contents
      return rawCode.replace(/<style>([\s\S]*?)<\/style>/gi, (_, css) => {
        // Scope every selector by prefixing with #preview-root
        const scopedCss = css.replace(/([^\s}{]+)\s*(?={)/g, (selector: string) => {
          const trimmed = selector.trim();
          if (trimmed === 'body' || trimmed === 'html') return '#preview-area';
          return `#preview-area ${trimmed}`;
        });
        return `<style>${scopedCss}</style>`;
      });
    } catch (e) {
      return rawCode;
    }
  };

  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-500">
      {/* Mobile Tab Switcher */}
      <div className="flex p-1 bg-slate-100 rounded-xl lg:hidden">
        <button 
          onClick={() => setActiveTab('quest')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'quest' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
        >
          Quest
        </button>
        <button 
          onClick={() => setActiveTab('preview')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'preview' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
        >
          Preview
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {/* Left: Quest & Editor */}
        <div className={`flex flex-col gap-4 ${activeTab === 'preview' ? 'hidden lg:flex' : 'flex'}`}>
          <div className="bento-box p-6 border-l-4 border-l-slate-900">
             <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={16} className={isCompleted ? "text-emerald-500" : "text-slate-300"} />
                <h4 className="text-sm font-bold text-slate-900">Tugas Kamu</h4>
             </div>
             <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">{currentStep.quest.instruction}</p>
             
             <div className="flex flex-wrap gap-2 mb-6">
                {Object.keys(currentStep.quest.explanation).map(tag => (
                  <code key={tag} className="text-[10px] font-bold bg-slate-50 text-slate-900 px-2 py-1 rounded border border-slate-100">{tag}</code>
                ))}
             </div>

             <div className="flex gap-3">
               <button onClick={() => setMode('materi')} className="btn-base btn-subtle flex-1 py-2.5 text-xs">Review Materi</button>
               {isCompleted && (
                 <button onClick={onNext} className="btn-base btn-indigo flex-1 py-2.5 text-xs">
                   Lanjut <ChevronRight size={16} />
                 </button>
               )}
             </div>
          </div>

          <div className="bento-box overflow-hidden h-[350px] border-slate-200">
            <Editor value={code} onChange={setCode} />
          </div>
        </div>

        {/* Right: Preview */}
        <div className={`bento-box overflow-hidden flex flex-col h-[520px] ${activeTab === 'quest' ? 'hidden lg:flex' : 'flex'}`}>
           <div className="bg-slate-50 px-4 py-2 border-b border-slate-100 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-slate-200" />
                <div className="w-2 h-2 rounded-full bg-slate-200" />
                <div className="w-2 h-2 rounded-full bg-slate-200" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Live Preview</span>
           </div>
           <div className="flex-1 bg-white p-4 overflow-auto relative" id="preview-area">
              <div dangerouslySetInnerHTML={{ __html: getScopedCode(code) }} />
           </div>
        </div>
      </div>
    </div>
  );
};

export default QuestContent;
