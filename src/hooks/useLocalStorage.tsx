"use client";
import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        setValue(JSON.parse(stored));
      }
    } catch (err) {
      console.warn(`Erro ao ler ${key} do localStorage:`, err);
    } finally {
      setIsReady(true);
    }
  }, [key]);

  useEffect(() => {
    if (!isReady) return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.warn(`Erro ao salvar ${key} no localStorage:`, err);
    }
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
