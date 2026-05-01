import React from 'react';
import { Trophy, ChevronRight, Home, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CongratsProps {
  moduleName: string;
  xpEarned: number;
  onContinue: () => void;
  onGoHome: () => void;
}

const Congrats: React.FC<CongratsProps> = ({ moduleName, xpEarned, onContinue, onGoHome }) => {
  React.useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in-95 duration-1000">
      <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-[2.5rem] flex items-center justify-center mb-8 shadow-2xl shadow-indigo-100 animate-bounce">
        <Trophy size={48} />
      </div>
      
      <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Mission Accomplished!</h2>
      <p className="text-xl text-slate-500 font-medium max-w-md mb-12">
        You've mastered the <span className="text-indigo-600 font-bold">{moduleName}</span> module and earned some serious street cred.
      </p>

      <div className="flex items-center gap-3 bg-indigo-50 px-6 py-3 rounded-2xl border border-indigo-100 mb-12">
        <Zap size={20} className="text-indigo-600 fill-indigo-600" />
        <span className="text-2xl font-black text-indigo-600">+{xpEarned} XP Total</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
        <button onClick={onGoHome} className="btn-base btn-subtle flex-1 py-5">
          <Home size={20} /> Back Home
        </button>
        <button onClick={onContinue} className="btn-base btn-indigo flex-[1.5] py-5">
          Next Module <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Congrats;
