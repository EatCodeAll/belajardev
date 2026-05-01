import { useState, useEffect, useMemo } from 'react';
import { HTML_CONTENT, LINUX_CONTENT } from '../data/content';
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

  // 1. Sync from Cloud to Local when user logs in
  useEffect(() => {
    if (!user) return;

    const userDocRef = doc(db, 'users', user.uid);
    
    // Use onSnapshot for real-time sync across devices
    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.completedHtml) setCompletedHtml(data.completedHtml);
        if (data.completedLinux) setCompletedLinux(data.completedLinux);
      } else {
        // If first time login, upload current local progress to cloud
        setDoc(userDocRef, {
          completedHtml,
          completedLinux,
          updatedAt: new Date()
        });
      }
    });

    return () => unsubscribe();
  }, [user]);

  // 2. Sync to Cloud when progress changes
  useEffect(() => {
    if (!user) return;

    const syncToCloud = async () => {
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        completedHtml,
        completedLinux,
        updatedAt: new Date()
      }, { merge: true });
    };

    const timeoutId = setTimeout(syncToCloud, 1000); // Debounce sync
    return () => clearTimeout(timeoutId);
  }, [completedHtml, completedLinux, user]);

  // 3. Keep LocalStorage as backup
  useEffect(() => {
    localStorage.setItem('belajardev_html', JSON.stringify(completedHtml));
  }, [completedHtml]);

  useEffect(() => {
    localStorage.setItem('belajardev_linux', JSON.stringify(completedLinux));
  }, [completedLinux]);

  const xp = useMemo(() => {
    const htmlXp = completedHtml.reduce((total, id) => {
      const step = HTML_CONTENT.find(s => s.id === id);
      return total + (step?.quest.xp || 0);
    }, 0);

    const linuxXp = completedLinux.reduce((total, id) => {
      const step = LINUX_CONTENT.find(s => s.id === id);
      return total + (step?.quest.xp || 0);
    }, 0);

    return htmlXp + linuxXp;
  }, [completedHtml, completedLinux]);

  const completeStep = (module: 'html' | 'linux', stepId: number) => {
    if (module === 'html' && !completedHtml.includes(stepId)) {
      setCompletedHtml(prev => [...prev, stepId]);
    } else if (module === 'linux' && !completedLinux.includes(stepId)) {
      setCompletedLinux(prev => [...prev, stepId]);
    }
  };

  const resetProgress = () => {
    if (confirm('Ini akan menghapus semua progres kamu termasuk yang ada di cloud. Lanjutkan?')) {
      setCompletedHtml([]);
      setCompletedLinux([]);
      localStorage.removeItem('belajardev_html');
      localStorage.removeItem('belajardev_linux');
      
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        setDoc(userDocRef, {
          completedHtml: [],
          completedLinux: [],
          updatedAt: new Date()
        });
      }
    }
  };

  return { xp, completedHtml, completedLinux, completeStep, resetProgress };
};
