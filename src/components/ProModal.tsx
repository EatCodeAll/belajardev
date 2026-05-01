import React from 'react';
import { Crown, CheckCircle2, X, Zap } from 'lucide-react';

interface ProModalProps {
  isOpen: boolean;
  onClose: () => void;
  moduleName?: string;
}

const ProModal: React.FC<ProModalProps> = ({ isOpen, onClose, moduleName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] grid place-items-center p-4">
      <div 
        className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors p-2 bg-slate-50 hover:bg-slate-100 rounded-full z-10"
        >
          <X size={20} />
        </button>

        {/* Header Header */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-amber-400">
             <Crown size={120} />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 mb-6 border-2 border-white/20">
              <Crown className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight mb-2">Upgrade ke PRO</h2>
            <p className="text-slate-300 font-medium text-sm">
              Buka akses ke modul <strong className="text-white">{moduleName || 'Advanced'}</strong> dan tingkatkan skill coding kamu ke level profesional.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 bg-white">
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
               <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
               <p className="text-sm font-bold text-slate-700">Akses seumur hidup ke semua modul lanjutan (Advanced HTML, CSS Layouts, JS Logic).</p>
            </div>
            <div className="flex items-start gap-3">
               <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
               <p className="text-sm font-bold text-slate-700">Akses ke proyek nyata dan studi kasus.</p>
            </div>
            <div className="flex items-start gap-3">
               <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
               <p className="text-sm font-bold text-slate-700">Dukungan prioritas dan sertifikat kelulusan.</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
             <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sekali Bayar</span>
                <span className="text-2xl font-black text-slate-900">Rp 5.000</span>
             </div>
             <div className="px-3 py-1 bg-emerald-100 text-emerald-700 font-black text-[10px] rounded-full uppercase tracking-widest border border-emerald-200">
               Akses Permanen
             </div>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 rounded-2xl font-black text-sm shadow-xl shadow-amber-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            BERLANGGANAN SEKARANG <Zap size={18} className="fill-amber-950" />
          </button>
          
          <p className="text-center text-[10px] text-slate-400 font-bold mt-4 uppercase tracking-widest">Pembayaran aman via Midtrans</p>
        </div>
      </div>
    </div>
  );
};

export default ProModal;
