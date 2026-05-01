import React from 'react';

interface EditorProps {
  value: string;
  onChange: (code: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col h-full border border-slate-800 rounded-3xl overflow-hidden bg-slate-950 shadow-2xl transition-all duration-300">
      <div className="bg-slate-900 px-5 py-3 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700/50" />
          <span>index.html</span>
        </div>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
        </div>
      </div>
      <textarea
        className="flex-1 p-6 bg-transparent text-indigo-100 font-mono text-sm sm:text-base resize-none focus:outline-none caret-indigo-500 leading-relaxed scrollbar-hide"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        autoComplete="off"
        autoCapitalize="none"
        placeholder="Type your code here..."
      />
    </div>
  );
};

export default Editor;
