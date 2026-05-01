import { useState, useEffect, useMemo } from 'react';
import { HTML_CONTENT, LINUX_CONTENT } from '../data/content';

export const useProgress = () => {
  const [completedHtml, setCompletedHtml] = useState<number[]>(() => {
    const saved = localStorage.getItem('belajardev_html');
    return saved ? JSON.parse(saved) : [];
  });

  const [completedLinux, setCompletedLinux] = useState<number[]>(() => {
    const saved = localStorage.getItem('belajardev_linux');
    return saved ? JSON.parse(saved) : [];
  });

  // Calculate XP dynamically based on completed steps to ensure it's always in sync
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

  useEffect(() => {
    localStorage.setItem('belajardev_html', JSON.stringify(completedHtml));
  }, [completedHtml]);

  useEffect(() => {
    localStorage.setItem('belajardev_linux', JSON.stringify(completedLinux));
  }, [completedLinux]);

  // Persist total XP for quick reference if needed, although we derive it now
  useEffect(() => {
    localStorage.setItem('belajardev_xp', xp.toString());
  }, [xp]);

  const completeStep = (module: 'html' | 'linux', stepId: number) => {
    if (module === 'html' && !completedHtml.includes(stepId)) {
      setCompletedHtml(prev => [...prev, stepId]);
    } else if (module === 'linux' && !completedLinux.includes(stepId)) {
      setCompletedLinux(prev => [...prev, stepId]);
    }
  };

  const resetProgress = () => {
    setCompletedHtml([]);
    setCompletedLinux([]);
    localStorage.removeItem('belajardev_xp');
    localStorage.removeItem('belajardev_html');
    localStorage.removeItem('belajardev_linux');
  };

  return { xp, completedHtml, completedLinux, completeStep, resetProgress };
};
