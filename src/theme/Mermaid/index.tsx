import React, {useEffect, useRef} from 'react';
import Mermaid from '@theme-original/Mermaid';
import type {Props} from '@theme/Mermaid';
import Panzoom from '@panzoom/panzoom';

export default function MermaidWrapper(props: Props): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panzoomRef = useRef<ReturnType<typeof Panzoom> | null>(null);
  const svgRef = useRef<SVGElement | null>(null);
  const [isExpanded, setIsExpanded] = React.useState(false);

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsExpanded(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isExpanded]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    let cleanup: (() => void) | null = null;

    const init = (svg: SVGElement) => {
      const panzoom = Panzoom(svg, {
        maxScale: 4,
        minScale: 0.6,
        contain: 'none',
      });
      panzoomRef.current = panzoom;
      svgRef.current = svg;

      const parent = svg.parentElement;
      const onWheel = (event: WheelEvent) => {
        event.preventDefault();
        panzoom.zoomWithWheel(event);
      };

      parent?.addEventListener('wheel', onWheel, {passive: false});

      cleanup = () => {
        parent?.removeEventListener('wheel', onWheel);
        panzoom.destroy();
        panzoomRef.current = null;
      };
    };

    const existing = container.querySelector('svg');
    if (existing) {
      init(existing);
    } else {
      const observer = new MutationObserver(() => {
        const svg = container.querySelector('svg');
        if (svg) {
          observer.disconnect();
          init(svg);
        }
      });
      observer.observe(container, {childList: true, subtree: true});
      cleanup = () => observer.disconnect();
    }

    return () => {
      if (cleanup) cleanup();
      svgRef.current = null;
    };
  }, [props.children, isExpanded]);

  const handleZoomIn = () => {
    const panzoom = panzoomRef.current;
    const svg = svgRef.current;
    if (panzoom && svg && svg.isConnected) {
      panzoom.zoomIn();
    }
  };

  const handleZoomOut = () => {
    const panzoom = panzoomRef.current;
    const svg = svgRef.current;
    if (panzoom && svg && svg.isConnected) {
      panzoom.zoomOut();
    }
  };

  const handleReset = () => {
    const panzoom = panzoomRef.current;
    const svg = svgRef.current;
    if (panzoom && svg && svg.isConnected) {
      panzoom.reset();
    }
  };

  const handleExpand = () => {
    setIsExpanded(true);
  };

  return (
    <div className={`mermaid-zoom__wrapper${isExpanded ? ' mermaid-zoom__wrapper--expanded' : ''}`}>
      {isExpanded && <div className="mermaid-zoom__backdrop" onClick={() => setIsExpanded(false)} />}
      <div ref={containerRef} className={`mermaid-zoom${isExpanded ? ' mermaid-zoom--expanded' : ''}`}>
        <div className="mermaid-zoom__controls" aria-label="Diagram zoom controls">
          <button type="button" onClick={handleZoomIn} className="mermaid-zoom__btn" aria-label="Zoom in">
            +
          </button>
          <button type="button" onClick={handleZoomOut} className="mermaid-zoom__btn" aria-label="Zoom out">
            −
          </button>
          <button type="button" onClick={handleReset} className="mermaid-zoom__btn" aria-label="Reset zoom">
            Reset
          </button>
          <button
            type="button"
            onClick={() => setIsExpanded((v) => !v)}
            className="mermaid-zoom__btn"
            aria-label={isExpanded ? 'Collapse diagram' : 'Expand diagram'}
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        </div>
        <div className="mermaid-zoom__content" onClick={() => !isExpanded && handleExpand()}>
          <Mermaid {...props} />
        </div>
      </div>
    </div>
  );
}
