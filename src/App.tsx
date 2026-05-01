import { useState } from 'react';
import './styles/global.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Landing from './components/Landing';
import HtmlModule from './modules/html/HtmlModule';
import LinuxModule from './modules/linux/LinuxModule';
import { useProgress } from './hooks/useProgress';
import { auth } from './lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user, loading] = useAuthState(auth);
  const [activeModule, setActiveModule] = useState<'home' | 'html' | 'linux'>('home');
  const { xp, completedHtml, completedLinux, completeStep, resetProgress } = useProgress();

  const handleHomeClick = () => setActiveModule('home');
  const handleNavigate = (module: 'home' | 'html' | 'linux') => setActiveModule(module);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-slate-100 border-t-slate-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return <Landing />;
  }

  return (
    <div className="min-h-screen pb-32 overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      <Header 
        xp={xp} 
        onHomeClick={handleHomeClick} 
        onResetProgress={resetProgress} 
      />

      <Navbar 
        activeModule={activeModule} 
        setActiveModule={setActiveModule} 
      />

      <main className="max-w-7xl mx-auto px-6 pt-24">
        {activeModule === 'home' && (
          <Home 
            setActiveModule={setActiveModule} 
            xp={xp} 
            completedHtml={completedHtml} 
            completedLinux={completedLinux} 
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
      </main>

      <Footer />
    </div>
  );
}

export default App;
