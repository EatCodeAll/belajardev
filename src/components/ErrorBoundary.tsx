import { Component, type ErrorInfo, type ReactNode } from 'react';
import { RotateCcw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-slate-50">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ups! Terjadi kesalahan.</h2>
          <p className="text-slate-500 mb-8 max-w-md">
            Aplikasi mengalami kendala teknis. Jangan khawatir, progres kamu tetap aman.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn-base btn-indigo"
          >
            Muat Ulang Aplikasi <RotateCcw size={18} />
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
