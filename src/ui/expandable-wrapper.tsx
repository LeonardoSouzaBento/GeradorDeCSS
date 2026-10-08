import { Button } from './button';
import { Icon } from './lucide-icon';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const REFERENCE_CONTENT = `body {
@apply text-[1.05rem] sm:text-[1.0625rem] md:text-[1.065rem] lg:text-[1.07rem] xl:text-[1.075rem] 2xl:text-[1.0800rem];
}`;

interface ExpandablePreProps {
  content: string;
  className?: string;
}

export const ExpandablePre: React.FC<ExpandablePreProps> = ({ content, className = '' }) => {
  const [expanded, setExpanded] = useState(false);
  const [collapsedHeight, setCollapsedHeight] = useState<number | null>(null);
  const [canCollapse, setCanCollapse] = useState(false);

  const measureRef = useRef<HTMLPreElement>(null);
  const contentRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const updateHeights = () => {
      if (!measureRef.current || !contentRef.current) return;
      const refHeight = measureRef.current.offsetHeight;
      const fullHeight = contentRef.current.scrollHeight;
      setCollapsedHeight(refHeight);
      setCanCollapse(fullHeight > refHeight + 4);
    };

    updateHeights();

    const observer = new ResizeObserver(() => {
      updateHeights();
    });

    if (measureRef.current) observer.observe(measureRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, [content]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Bloco de referência invisível para medir a altura exata na largura atual */}
      <pre
        ref={measureRef}
        aria-hidden="true"
        className="invisible pointer-events-none absolute top-0 left-0 w-full -z-10 overflow-hidden"
      >
        {REFERENCE_CONTENT}
      </pre>

      <div className="relative">
        <pre
          ref={contentRef}
          style={{
            maxHeight:
              canCollapse && !expanded && collapsedHeight
                ? `${collapsedHeight}px`
                : undefined,
          }}
          className={`transition-all duration-200 ${
            canCollapse && !expanded ? 'overflow-hidden pb-9' : 'overflow-x-auto'
          } ${canCollapse && expanded ? 'pb-11' : ''}`}
        >
          {content}
        </pre>

        {canCollapse && !expanded && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-primary-50 via-primary-50/80 to-transparent rounded-b-[2px]"
          />
        )}

        {canCollapse && (
          <div className="absolute bottom-2 right-2 z-10">
            <Button
              type="button"
              size="sm"
              variant="secondary"
              onClick={() => setExpanded((prev) => !prev)}
              className="rounded-full min-h-7 px-3 py-1 text-xs shadow-xs border border-border/70 bg-card/95 hover:bg-card"
            >
              <Icon Icon={expanded ? ChevronUp : ChevronDown} size="xs" />
              {expanded ? 'Colapsar' : 'Expandir'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
