import { useState, useEffect, useMemo } from 'react';
import { HTML_CONTENT, LINUX_CONTENT, CSS_CONTENT, JS_CONTENT } from '../data/content';
import { auth, db } from '../lib/firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

export const useProgress = () => {
  const [user] = useAuthState(auth);
  
  const [completedHtml, setCompletedHtml] = useState<number[]>(() => {
    const saved = localStorage.getItem('belajardev_html');
    return saved ? JSON.parse(saved) : [];
  });

  const [completedLinux, setCompletedLinux] = useState<number[]>(() => {
    const saved = localStorage.getItem('belajardev_linux');
    return saved ? JSON.parse(saved) : [];
  });

  const [completedCss, setCompletedCss] = useState<number[]>(() => {
    const saved = localStorage.getItem('belajardev_css');
    return saved ? JSON.parse(saved) : [];
  });

  const [completedJs, setCompletedJs] = useState<number[]>(() => {
    const saved = localStorage.getItem('belajardev_js');
    return saved ? JSON.parse(saved) : [];
  });

  // Sync from Cloud
  useEffect(() => {
    if (!user) return;
    const userDocRef = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.completedHtml) setCompletedHtml(data.completedHtml);
        if (data.completedLinux) setCompletedLinux(data.completedLinux);
        if (data.completedCss) setCompletedCss(data.completedCss);
        if (data.completedJs) setCompletedJs(data.completedJs);
      }
    });
    return () => unsubscribe();
  }, [user]);

  // Sync to Cloud
  useEffect(() => {
    if (!user) return;
    const syncToCloud = async () => {
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        completedHtml,
        completedLinux,
        completedCss,
        completedJs,
        updatedAt: new Date()
      }, { merge: true });
    };
    const timeoutId = setTimeout(syncToCloud, 1000);
    return () => clearTimeout(timeoutId);
  }, [completedHtml, completedLinux, completedCss, completedJs, user]);

  // Backup to LocalStorage
  useEffect(() => {
    localStorage.setItem('belajardev_html', JSON.stringify(completedHtml));
    localStorage.setItem('belajardev_linux', JSON.stringify(completedLinux));
    localStorage.setItem('belajardev_css', JSON.stringify(completedCss));
    localStorage.setItem('belajardev_js', JSON.stringify(completedJs));
  }, [completedHtml, completedLinux, completedCss, completedJs]);

  const xp = useMemo(() => {
    const calcXp = (ids: number[], content: any[]) => ids.reduce((t, id) => t + (content.find(s => s.id === id)?.quest.xp || 0), 0);
    return calcXp(completedHtml, HTML_CONTENT) + 
           calcXp(completedLinux, LINUX_CONTENT) + 
           calcXp(completedCss, CSS_CONTENT) + 
           calcXp(completedJs, JS_CONTENT);
  }, [completedHtml, completedLinux, completedCss, completedJs]);

  const completeStep = (module: 'html' | 'linux' | 'css' | 'js', stepId: number) => {
    const setFns = { html: setCompletedHtml, linux: setCompletedLinux, css: setCompletedCss, js: setCompletedJs };
    const currentCompleted = { html: completedHtml, linux: completedLinux, css: completedCss, js: completedJs };
    
    if (!currentCompleted[module].includes(stepId)) {
      setFns[module](prev => [...prev, stepId]);
    }
  };

  const resetProgress = () => {
    if (confirm('Hapus semua progres?')) {
      setCompletedHtml([]); setCompletedLinux([]); setCompletedCss([]); setCompletedJs([]);
      localStorage.clear();
      if (user) setDoc(doc(db, 'users', user.uid), { completedHtml: [], completedLinux: [], completedCss: [], completedJs: [] });
    }
  };

  return { xp, completedHtml, completedLinux, completedCss, completedJs, completeStep, resetProgress };
};
