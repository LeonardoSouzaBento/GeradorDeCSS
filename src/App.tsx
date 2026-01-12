import { Toaster } from '@/ui/toaster';
import { Toaster as Sonner } from '@/ui/sonner';
import { TooltipProvider } from '@/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import NotFound from './pages/not-found';
import Typography from './pages/typography/typography';
import ButtonPage from './pages/button-page/button-page';
import TestPage from './pages/TestPage';
import { useState, useEffect } from 'react';
import { useResizeWatcher } from './hooks/useResizeWatcher';

const queryClient = new QueryClient();

const App = () => {
  const [resizingCounter, setResizingCounter] = useState<number>();
  useResizeWatcher(setResizingCounter);

  useEffect(() => {
    setResizingCounter(1);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}>
          <Routes>
            <Route path="/" element={<Home resizingCounter={resizingCounter} />} />
            <Route path="/typography" element={<Typography resizingCounter={resizingCounter} />} />
            <Route path="/buttons" element={<ButtonPage resizingCounter={resizingCounter} />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
