import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

/**
 * Wraps page content in a smooth slide-fade transition.
 * Each route change triggers an exit → enter animation cycle.
 */
const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [phase, setPhase] = useState('idle'); // 'idle' | 'exit' | 'enter'
  const prevKey = useRef(location.key);

  useEffect(() => {
    if (location.key === prevKey.current) return;
    prevKey.current = location.key;

    // Start exit
    setPhase('exit');

    const exitTimer = setTimeout(() => {
      setDisplayedChildren(children);
      setPhase('enter');

      const enterTimer = setTimeout(() => {
        setPhase('idle');
      }, 420);

      return () => clearTimeout(enterTimer);
    }, 280);

    return () => clearTimeout(exitTimer);
  }, [location.key, children]);

  return (
    <div className={`page-transition page-transition--${phase}`}>
      {displayedChildren}
    </div>
  );
};

export default PageTransition;
