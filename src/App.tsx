import { useState } from 'react';
import './styles/global.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Landing from './components/Landing';
import HtmlModule from './modules/html/HtmlModule';
import LinuxModule from './modules/linux/LinuxModule';
import CssModule from './modules/css/CssModule';
import JsModule from './modules/js/JsModule';
import { useProgress } from './hooks/useProgress';
import { auth } from './lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useToast } from './components/Toast';

type ModuleType = 'home' | 'html' | 'linux' | 'css' | 'js';

function App() {
  const [user, loading] = useAuthState(auth);
  const [activeModule, setActiveModule] = useState<ModuleType>('home');
  const { xp, completedHtml, completedLinux, completedCss, completedJs, completeStep, resetProgress } = useProgress();
  const { showToast } = useToast();

  const isHtmlDone = completedHtml.length >= 5;

  const handleHomeClick = () => setActiveModule('home');

  const handleNavigate = (module: ModuleType) => {
    if ((module === 'css' || module === 'js') && !isHtmlDone) {
      showToast('warning', 'Akses Terkunci', 'Selesaikan setidaknya 5 misi HTML untuk membuka modul ini!');
      setActiveModule('home');
      return;
    }
    setActiveModule(module);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-slate-100 border-t-slate-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) return <Landing />;

  return (
    <div className="min-h-screen pb-32 overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      <Header xp={xp} onHomeClick={handleHomeClick} onResetProgress={resetProgress} />
      <Navbar 
        activeModule={activeModule} 
        setActiveModule={handleNavigate} 
        isHtmlDone={isHtmlDone}
      />

      <main className="max-w-7xl mx-auto px-6 pt-24">
        {activeModule === 'home' && (
          <Home 
            setActiveModule={handleNavigate} 
            xp={xp} 
            completedHtml={completedHtml} 
            completedLinux={completedLinux}
            completedCss={completedCss}
            completedJs={completedJs}
          />
        )}

        {activeModule === 'html' && (
          <HtmlModule 
            onCompleteStep={(id) => completeStep('html', id)} 
            completedSteps={completedHtml}
            onNavigate={handleNavigate}
          />
        )}
        
        {activeModule === 'linux' && (
          <LinuxModule 
            onCompleteStep={(id) => completeStep('linux', id)} 
            completedSteps={completedLinux}
            onNavigate={handleNavigate}
          />
        )}

        {activeModule === 'css' && (
          <CssModule 
            onCompleteStep={(id) => completeStep('css', id)} 
            completedSteps={completedCss}
            onNavigate={handleNavigate}
          />
        )}

        {activeModule === 'js' && (
          <JsModule 
            onCompleteStep={(id) => completeStep('js', id)} 
            completedSteps={completedJs}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
