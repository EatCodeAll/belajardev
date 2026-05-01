import React, { useState } from 'react';
import { auth, googleProvider } from '../lib/firebase';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LogOut, Mail, Lock, Globe, User, X } from 'lucide-react';

const Auth: React.FC = () => {
  const [user, loading] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      setShowModal(false);
    } catch (err: any) {
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Email atau password salah.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('Email sudah terdaftar.');
      } else {
        setError('Terjadi kesalahan. Coba lagi.');
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setShowModal(false);
    } catch (err: any) {
      setError('Gagal login dengan Google.');
    }
  };

  if (loading) return <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-slate-900 animate-spin" />;

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end hidden sm:flex">
          <span className="text-[10px] font-bold text-slate-900 leading-none truncate max-w-[100px]">{user.displayName || user.email}</span>
          <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest mt-1">Cloud Sync On</span>
        </div>
        <button 
          onClick={() => signOut(auth)}
          className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
          title="Sign Out"
        >
          <LogOut size={16} />
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center">
        <button 
          onClick={() => { setIsRegister(false); setShowModal(true); }}
          className="bg-slate-900 text-white px-4 py-1.5 rounded-lg text-[10px] font-bold hover:bg-slate-800 transition-colors shadow-sm"
        >
          Sign In
        </button>
      </div>

      {showModal && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-[2px] z-[100] flex items-center justify-center p-4 w-screen h-screen"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-[360px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-slate-100 animate-in fade-in zoom-in-95 duration-200 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
             <div className="p-6 sm:p-8">
               <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors p-1"
               >
                  <X size={18} />
               </button>

               <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-11 h-11 bg-slate-900 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-slate-200">
                     <User className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{isRegister ? 'Buat Akun' : 'Selamat Datang'}</h3>
                  <p className="text-[11px] text-slate-500 mt-1 font-medium">Simpan progres belajarmu di cloud.</p>
               </div>

               <form onSubmit={handleAuth} className="space-y-3.5">
                  <div className="relative">
                     <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                     <input 
                      type="email" 
                      placeholder="Alamat Email" 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                     />
                  </div>
                  <div className="relative">
                     <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                     <input 
                      type="password" 
                      placeholder="Password" 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                     />
                  </div>
                  {error && (
                    <div className="text-[10px] text-rose-600 font-bold bg-rose-50 px-3 py-2 rounded-lg border border-rose-100 animate-in fade-in slide-in-from-top-1">
                      {error}
                    </div>
                  )}
                  <button type="submit" className="w-full bg-slate-900 text-white py-3 rounded-xl text-xs font-bold hover:bg-slate-800 transition-all shadow-md active:scale-[0.98]">
                     {isRegister ? 'Daftar Sekarang' : 'Masuk ke Platform'}
                  </button>
               </form>

               <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                  <div className="relative flex justify-center text-[9px] uppercase font-black text-slate-300"><span className="bg-white px-3">Atau gunakan</span></div>
               </div>

               <button 
                onClick={signInWithGoogle}
                className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 py-3 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all active:scale-[0.98]"
               >
                  <Globe size={16} className="text-slate-400" /> Google Account
               </button>

               <p className="text-center mt-8 text-[11px] text-slate-500 font-medium">
                  {isRegister ? 'Sudah punya akun?' : 'Belum punya akun?'} 
                  <button 
                    onClick={() => { setIsRegister(!isRegister); setError(''); }} 
                    className="ml-1 text-slate-900 font-bold hover:underline"
                  >
                     {isRegister ? 'Masuk' : 'Daftar Gratis'}
                  </button>
               </p>
             </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
