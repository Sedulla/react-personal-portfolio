import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Scroll from 'react-smooth-scrollbar';

const SmoothScroll = ({ children }) => {
  const ref = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const { scrollbar } = ref.current;
    scrollbar.setPosition(0, 0);
  }, [pathname]);

  return (
    <Scroll ref={ref} damping=".09">
      ({children}
    </Scroll>
  );
};

export default SmoothScroll;
