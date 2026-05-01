import React, { useState, createContext, useContext, useCallback } from 'react';
import { X, CheckCircle2, AlertCircle, Info } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  message: string;
}

interface ToastContextType {
  showToast: (type: ToastType, title: string, message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((type: ToastType, title: string, message: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-24 right-4 z-[200] flex flex-col gap-3 w-full max-w-[320px] pointer-events-none">
        {toasts.map((toast) => (
          <div 
            key={toast.id}
            className="pointer-events-auto bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 p-4 flex gap-4 animate-in slide-in-from-right-10 fade-in duration-300 relative overflow-hidden group"
          >
            {/* Status Bar */}
            <div className={`absolute top-0 left-0 bottom-0 w-1.5 ${
              toast.type === 'success' ? 'bg-emerald-500' : 
              toast.type === 'error' ? 'bg-rose-500' : 
              toast.type === 'warning' ? 'bg-amber-500' : 'bg-slate-900'
            }`} />

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                {toast.type === 'success' && <CheckCircle2 size={14} className="text-emerald-500" />}
                {toast.type === 'error' && <AlertCircle size={14} className="text-rose-500" />}
                {toast.type === 'warning' && <AlertCircle size={14} className="text-amber-500" />}
                {toast.type === 'info' && <Info size={14} className="text-slate-900" />}
                <span className="text-xs font-black text-slate-900 uppercase tracking-widest">{toast.title}</span>
              </div>
              <p className="text-xs text-slate-600 font-bold leading-relaxed">{toast.message}</p>
            </div>

            <button 
              onClick={() => removeToast(toast.id)}
              className="p-1 text-slate-300 hover:text-slate-900 transition-colors self-start"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};
