import React, { useState } from 'react';
import ProgressBar from '../../components/ProgressBar';
import Congrats from '../../components/Congrats';
import LinuxQuestContent from './LinuxQuestContent';
import { LINUX_CONTENT } from '../../data/content';
import { Trophy } from 'lucide-react';

interface Props {
  onCompleteStep: (id: number) => void;
  completedSteps: number[];
  onNavigate: (module: 'home' | 'html' | 'linux') => void;
}

const LinuxModule: React.FC<Props> = ({ onCompleteStep, completedSteps, onNavigate }) => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);

  const currentStep = LINUX_CONTENT[currentStepIdx];
  const isCompleted = completedSteps.includes(currentStep.id);

  const handleNext = () => {
    if (currentStepIdx < LINUX_CONTENT.length - 1) {
      setCurrentStepIdx(prev => prev + 1);
    } else {
      setShowCongrats(true);
    }
  };

  if (showCongrats) {
    return (
      <Congrats 
        moduleName="Linux Systems"
        xpEarned={LINUX_CONTENT.reduce((acc, curr) => acc + curr.quest.xp, 0)}
        onContinue={() => onNavigate('html')}
        onGoHome={() => onNavigate('home')}
      />
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto animate-in fade-in duration-500 pb-20">
      {/* Professional Module Header */}
      <div className="flex flex-col gap-4 px-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Linux Systems</span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight truncate">{currentStep.title}</h2>
          </div>
          <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100">
             <Trophy size={14} className="text-slate-400" />
             <span className="text-[10px] font-bold text-slate-600 tracking-tight">{currentStep.quest.xp} XP</span>
          </div>
        </div>
        <ProgressBar current={currentStepIdx + 1} total={LINUX_CONTENT.length} colorClass="bg-slate-900" />
      </div>

      <div className="px-4">
        <LinuxQuestContent 
          key={currentStepIdx}
          currentStep={currentStep}
          isCompleted={isCompleted}
          onCompleteStep={onCompleteStep}
          onNext={handleNext}
        />
      </div>
    </div>
  );
};

export default LinuxModule;
