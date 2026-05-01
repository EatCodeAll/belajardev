import React, { useState, useRef, useEffect } from 'react';

interface TerminalProps {
  onCommand: (cmd: string) => string;
}

const Terminal: React.FC<TerminalProps> = ({ onCommand }) => {
  const [history, setHistory] = useState<{ type: 'input' | 'output'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const output = onCommand(input.trim());
    
    if (output === 'TERMINAL_CLEAR') {
      setHistory([]);
    } else {
      setHistory(prev => [
        ...prev,
        { type: 'input', text: input },
        { type: 'output', text: output }
      ]);
    }
    setInput('');
  };

  const insertChar = (char: string) => {
    setInput(prev => prev + char);
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 h-[500px] font-mono selection:bg-emerald-500/30">
      {/* Terminal Header */}
      <div className="bg-slate-900 px-5 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-700/50" />
          <div className="w-3 h-3 rounded-full bg-slate-700/50" />
          <div className="w-3 h-3 rounded-full bg-slate-700/50" />
        </div>
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">bash — local</span>
        <div className="w-12" />
      </div>

      {/* Output Area */}
      <div 
        ref={scrollRef} 
        className="flex-1 overflow-y-auto p-6 text-sm sm:text-base scrollbar-hide"
      >
        <div className="text-slate-600 text-xs mb-6 opacity-80 border-b border-slate-900 pb-4">
          Session started: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
          <br />Type <span className="text-emerald-500">'help'</span> for available commands.
        </div>
        
        {history.map((line, i) => (
          <div key={i} className="mb-2 animate-in fade-in slide-in-from-left-2 duration-300">
            {line.type === 'input' ? (
              <div className="flex gap-3">
                <span className="text-emerald-500 font-bold">➜</span>
                <span className="text-blue-400 font-bold">~</span>
                <span className="text-white">{line.text}</span>
              </div>
            ) : (
              <div className="text-slate-300 whitespace-pre-wrap pl-8 leading-relaxed py-1">{line.text}</div>
            )}
          </div>
        ))}
        
        {/* Current Input Line */}
        <form onSubmit={handleSubmit} className="flex gap-3 items-center">
          <span className="text-emerald-500 font-bold animate-pulse">➜</span>
          <span className="text-blue-400 font-bold">~</span>
          <input
            ref={inputRef}
            type="text"
            className="bg-transparent outline-none flex-1 text-white caret-emerald-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="none"
            autoFocus
          />
        </form>
      </div>

      {/* Mobile Assistant Toolbar */}
      <div className="flex items-center gap-1.5 p-2.5 bg-slate-900/50 border-t border-slate-800 overflow-x-auto no-scrollbar">
        {['ls', 'cd ..', 'mkdir ', 'touch ', 'pwd', 'clear', 'help'].map((char) => (
          <button
            key={char}
            type="button"
            onClick={() => insertChar(char)}
            className="flex-none px-4 py-2 bg-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-wider rounded-lg hover:bg-slate-700 hover:text-white active:scale-95 transition-all border border-slate-700/50"
          >
            {char.trim()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
