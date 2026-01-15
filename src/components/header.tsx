import { useEffect, useRef, useState } from 'react';

const linearGradient = 'from-start via-start to-end';

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
  page?: string;
  removeHeader?: boolean;
  className?: string;
  resizingCounter?: number;
  isMobile?: boolean;
}

const Header = ({
  title,
  description,
  icon,
  page,
  removeHeader,
  className,
  resizingCounter,
  isMobile,
}: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number | string>(0);


  function getHeight() {
    if (!headerRef.current) return;
    const headerHeight = headerRef.current.offsetHeight;
    setHeaderHeight(headerHeight);
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
      className="w-full box-border transition-all duration-400 overflow-hidden">
      <header
        ref={headerRef}
        className={`w-full py-8 box-border min-h-max h-auto mx-auto flex items-center animate-in fade-in slide-in-from-top duration-500 ${className}`}>
        <div className={`flex items-center justify-center mb-2 pre-sm:mb-0`}>
          <div
            className={`h-13.5 w-13.5 text-white/93 flex items-center justify-center
             p-2.5 mb-0.5 bg-linear-to-br ${linearGradient} rounded-xl shadow-lg`}>
            {icon}
          </div>
        </div>
        <div>
          <h1
            className={`h-auto pb-1 h1-hero bg-linear-to-r ${linearGradient} bg-clip-text text-transparent
            mb-0 capitalize pre-sm:text-left`}>
            {title}
          </h1>
          <p
            className={`text-muted-foreground max-w-2xl
              mx-auto px-3 pre-sm:text-left ${page === 'typography' ? 'pre-sm:pl-1' : 'pl-[0.2ex]'} text-base`}>
            {description}
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
