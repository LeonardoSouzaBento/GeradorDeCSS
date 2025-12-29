import { Toaster } from '@/ui/toaster';
import { Toaster as Sonner } from '@/ui/sonner';
import { TooltipProvider } from '@/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import NotFound from './pages/not-found';
import Typography from './pages/typography/typography';
import ButtonPage from './pages/button-page/button-page';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/buttons" element={<ButtonPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
