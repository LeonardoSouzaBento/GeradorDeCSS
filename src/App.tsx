import { Toaster } from "@/ui/toaster";
import { Toaster as Sonner } from "@/ui/sonner";
import { TooltipProvider } from "@/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  ButtonPage,
  TypographyPage,
  NotFound,
  TestPage,
  PaletteGeneratorPage,
} from "@/pages/index";
import { useState, useEffect } from "react";
import { useResizeWatcher } from "./hooks/useResizeWatcher";
import { ButtonPageProvider } from "./contexts/button-page-context";

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
          }}
        >
          <Routes>
            <Route
              path="/"
              element={<Home resizingCounter={resizingCounter} />}
            />
            <Route
              path="/typography"
              element={<TypographyPage resizingCounter={resizingCounter} />}
            />
            <Route
              path="/buttons"
              element={
                <ButtonPageProvider>
                  <ButtonPage />
                </ButtonPageProvider>
              }
            />
            <Route path="/test" element={<TestPage />} />
            <Route
              path="/palette-generator"
              element={<PaletteGeneratorPage />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
