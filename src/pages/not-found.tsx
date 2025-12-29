import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className={`flex min-h-screen items-center justify-center bg-muted`}>
      <div className={`text-center`}>
        <h1 className={`mb-4  `}>404</h1>
        <p className={`mb-4 text-xl text-muted-foreground`}>Oops! Página não encontrada</p>
        <Button variant="link">
          <Link to="/">Voltar para Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
