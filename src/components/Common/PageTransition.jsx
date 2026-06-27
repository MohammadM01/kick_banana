import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

/**
 * Wraps page content in a smooth transition.
 * Each route has a unique entrance/exit animation based on pathname.
 */
const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [phase, setPhase] = useState('idle'); // 'idle' | 'exit' | 'enter'
  const prevKey = useRef(location.key);

  const getTransitionType = (pathname) => {
    if (pathname === '/') return 'home';
    if (pathname.includes('/collections')) return 'collections';
    if (pathname.includes('/about')) return 'about';
    if (pathname.includes('/custom')) return 'custom';
    if (pathname.includes('/contact')) return 'contact';
    return 'default';
  };

  const [transitionType, setTransitionType] = useState(getTransitionType(location.pathname));

  useEffect(() => {
    if (location.key === prevKey.current) return;
    prevKey.current = location.key;

    // Start exit with CURRENT transition type
    setPhase('exit');

    const exitTimer = setTimeout(() => {
      // Update displayed content and switch transition type to the NEW route
      setDisplayedChildren(children);
      setTransitionType(getTransitionType(location.pathname));
      setPhase('enter');

      const enterTimer = setTimeout(() => {
        setPhase('idle');
      }, 500); // Slightly longer for dramatic effects

      return () => clearTimeout(enterTimer);
    }, 300);

    return () => clearTimeout(exitTimer);
  }, [location.key, children, location.pathname]);

  return (
    <div className={`page-transition page-transition--${phase} page-transition-type-${transitionType}`}>
      {displayedChildren}
    </div>
  );
};

export default PageTransition;
