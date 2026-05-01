import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  colorClass?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, colorClass = 'bg-indigo-600' }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50 p-[2px]">
      <div 
        className={`h-full ${colorClass} rounded-full transition-all duration-1000 ease-out relative overflow-hidden shadow-sm`} 
        style={{ width: `${percentage}%` }}
      >
        <div className="absolute inset-0 bg-white/20 animate-pulse" />
      </div>
    </div>
  );
};

export default ProgressBar;
