import React, { useState } from 'react';
import ProgressBar from '../../components/ProgressBar';
import Congrats from '../../components/Congrats';
import QuestContent from './QuestContent';
import { HTML_CONTENT } from '../../data/content';
import { Trophy } from 'lucide-react';

interface Props {
  onCompleteStep: (id: number) => void;
  completedSteps: number[];
  onNavigate: (module: 'home' | 'html' | 'linux') => void;
}

const HtmlModule: React.FC<Props> = ({ onCompleteStep, completedSteps, onNavigate }) => {
  const [currentStepIdx, setCurrentStepIdx] = useState(() => {
    const firstUncompleted = HTML_CONTENT.findIndex(s => !completedSteps.includes(s.id));
    return firstUncompleted === -1 ? 0 : firstUncompleted;
  });
  const [showCongrats, setShowCongrats] = useState(() => {
    return completedSteps.length === HTML_CONTENT.length && HTML_CONTENT.length > 0;
  });

  const currentStep = HTML_CONTENT[currentStepIdx];
  const isCompleted = completedSteps.includes(currentStep.id);

  const handleNext = () => {
    if (currentStepIdx < HTML_CONTENT.length - 1) {
      setCurrentStepIdx(prev => prev + 1);
    } else {
      setShowCongrats(true);
    }
  };

  if (showCongrats) {
    return (
      <Congrats 
        moduleName="HTML Foundation"
        xpEarned={HTML_CONTENT.reduce((acc, curr) => acc + curr.quest.xp, 0)}
        onContinue={() => onNavigate('linux')}
        onGoHome={() => onNavigate('home')}
      />
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto animate-in fade-in duration-500 pb-20">
      {/* Professional Module Header */}
      <div className="flex flex-col gap-4 px-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">HTML Foundation</span>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight truncate">{currentStep.title}</h3>
          </div>
          <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100">
             <Trophy size={14} className="text-slate-400" />
             <span className="text-[10px] font-bold text-slate-600 tracking-tight">{currentStep.quest.xp} XP</span>
          </div>
        </div>
        <ProgressBar current={currentStepIdx + 1} total={HTML_CONTENT.length} />
      </div>

      <div className="px-4">
        <QuestContent 
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

export default HtmlModule;
