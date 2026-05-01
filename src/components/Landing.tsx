import React, { useState } from 'react';
import { auth, googleProvider } from '../lib/firebase';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { BookOpen, Mail, Lock, Globe, User, Rocket, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';

const Landing: React.FC = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Email atau password salah.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('Email sudah terdaftar.');
      } else {
        setError('Terjadi kesalahan. Coba lagi.');
      }
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
      setError('Gagal login dengan Google.');
    } finally {
      setLoading(false);
    }
  };

  if (!showAuth) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
          <div className="absolute top-20 left-20 -rotate-12"><BookOpen size={400} /></div>
          <div className="absolute bottom-20 right-20 rotate-12"><Rocket size={400} /></div>
        </div>

        <div className="max-w-3xl w-full z-10 animate-in fade-in zoom-in-95 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-900 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-10 border border-slate-100 shadow-sm">
            <CheckCircle2 size={14} className="text-emerald-500" /> Professional Learning Path
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1] mb-8 tracking-tighter">
            BELAJAR <br /> 
            <span className="text-slate-300">DEVELOPER.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 font-bold leading-relaxed mb-12 max-w-2xl mx-auto">
            Kuasai HTML dan Linux melalui platform pembelajaran interaktif yang dirancang khusus untuk mempercepat karirmu di dunia teknologi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <button 
              onClick={() => { setShowAuth(true); setIsRegister(true); }}
              className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-slate-800 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
             >
               MULAI BELAJAR GRATIS <ArrowRight size={20} />
             </button>
             <button 
              onClick={() => { setShowAuth(true); setIsRegister(false); }}
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-black text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
             >
               LOGIN KE AKUN
             </button>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-50 flex flex-wrap justify-center gap-12 grayscale opacity-40">
             <div className="flex flex-col items-center"><span className="text-2xl font-black">40+</span><span className="text-[10px] font-bold uppercase tracking-widest">Materi</span></div>
             <div className="flex flex-col items-center"><span className="text-2xl font-black">3k+</span><span className="text-[10px] font-bold uppercase tracking-widest">Total XP</span></div>
             <div className="flex flex-col items-center"><span className="text-2xl font-black">24/7</span><span className="text-[10px] font-bold uppercase tracking-widest">Akses Cloud</span></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <button 
        onClick={() => setShowAuth(false)}
        className="absolute top-8 left-8 flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-slate-900 transition-all uppercase tracking-widest"
      >
        <ChevronRight size={16} className="rotate-180" /> Kembali
      </button>

      <div className="max-w-md w-full z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.05)] border border-slate-100">
           <div className="flex flex-col items-center text-center mb-10">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-slate-200">
                 <User className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">{isRegister ? 'Buat Akun Baru' : 'Selamat Datang'}</h2>
              <p className="text-sm text-slate-700 font-bold">Lanjutkan perjalanan belajarmu di platform.</p>
           </div>

           <form onSubmit={handleAuth} className="space-y-4">
              <div className="relative">
                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-900" size={16} />
                 <input 
                  type="email" 
                  placeholder="Alamat Email" 
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-all placeholder:text-slate-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                 />
              </div>
              <div className="relative">
                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-900" size={16} />
                 <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-all placeholder:text-slate-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                 />
              </div>
              
              {error && <p className="text-[10px] text-rose-600 font-bold bg-rose-50 p-3 rounded-xl border border-rose-100">{error}</p>}
              
              <button 
                disabled={loading}
                type="submit" 
                className="w-full bg-slate-900 text-white py-4 rounded-2xl text-sm font-black hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98] disabled:opacity-50 mt-4"
              >
                 {loading ? 'MENGECEK DATA...' : (isRegister ? 'DAFTAR SEKARANG' : 'MASUK KE DASHBOARD')}
              </button>
           </form>

           <div className="relative my-10">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
              <div className="relative flex justify-center text-[9px] font-black text-slate-300 uppercase tracking-widest"><span className="bg-white px-4">Atau</span></div>
           </div>

           <button 
            disabled={loading}
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-100 text-slate-900 py-4 rounded-2xl text-sm font-black hover:bg-slate-50 transition-all active:scale-[0.98] disabled:opacity-50"
           >
              <Globe size={18} className="text-slate-900" /> GOOGLE ACCOUNT
           </button>

           <p className="text-center mt-10 text-sm text-slate-700 font-bold">
              {isRegister ? 'Sudah punya akun?' : 'Belum punya akun?'} 
              <button 
                onClick={() => { setIsRegister(!isRegister); setError(''); }} 
                className="ml-1 text-slate-900 font-black hover:underline"
              >
                 {isRegister ? 'LOGIN' : 'DAFTAR'}
              </button>
           </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
