import { cn } from '@/lib/utils';
import { CaseSensitive, Home, MousePointerClick, Palette } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  title: string;
  description?: string;
  icon: React.ReactNode;
  page?: string;
  removeHeader?: boolean;
  className?: string;
  resizingCounter?: number;
  isMobile?: boolean;
}

const navItems = [
  { path: '/', label: 'Início', icon: Home },
  { path: '/typography', label: 'Tipografia', icon: CaseSensitive },
  { path: '/buttons', label: 'Botões', icon: MousePointerClick },
  { path: '/palette-generator', label: 'Paleta', icon: Palette },
];

export const Header = ({
  title,
  description,
  icon,
  removeHeader,
  className,
  resizingCounter,
  isMobile,
}: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number | string>(0);
  const location = useLocation();

  function getHeight() {
    if (!headerRef.current) return;
    const height = headerRef.current.offsetHeight;
    setHeaderHeight(height);
  }

  useEffect(() => {
    getHeight();
  }, []);

  useEffect(() => {
    getHeight();
  }, [resizingCounter]);

  return (
    <div
      ref={wrapperRef}
      style={{ height: removeHeader ? 0 : isMobile ? 'auto' : headerHeight || 'auto' }}
      className="w-full box-border transition-all duration-300 overflow-hidden mb-5 bg-card/90 backdrop-blur-xs shadow-[0_2px_10px_-2px_rgba(0,0,0,0.07),0_1px_3px_-1px_rgba(0,0,0,0.04)]">
      <header
        ref={headerRef}
        className={cn(
          `w-full py-3.5 px-3 sm:px-6 max-w-7xl mx-auto box-border
          flex flex-col gap-3 md:flex-row md:items-center md:justify-between`,
          className,
        )}>
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="size-10 shrink-0 text-primary bg-primary-50 border border-primary-200/70
            flex items-center justify-center rounded-[2px] [&>svg]:size-6 [&>div>svg]:size-6">
            {icon}
          </div>
          <div className="min-w-0 flex flex-col sm:flex-row sm:items-baseline sm:gap-2.5 text-left">
            <h1 className="text-foreground tracking-tight truncate mb-0">
              {title}
            </h1>
            {description && (
              <>
                <span className="hidden sm:inline text-muted-foreground/50 select-none" aria-hidden="true">
                  ·
                </span>
                <p className="small-text text-muted-foreground truncate">
                  {description}
                </p>
              </>
            )}
          </div>
        </div>

        <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hidden border-t border-border/50 pt-2 md:border-none md:pt-0">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const ItemIcon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  `no-underline inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full small-text transition-colors whitespace-nowrap shrink-0`,
                  isActive
                    ? 'bg-secondary text-secondary-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60',
                )}>
                <ItemIcon className="size-5 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </header>
    </div>
  );
};
