import { useEffect, useRef, useState } from 'react';
const useScrollHandling = ()=>{
  const [isScrolling, setIsScrolling] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const prevScrollPosition = useRef(0);

    const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > prevScrollPosition.current) {
      setIsScrolling('down');
    } else if (currentScrollPosition < prevScrollPosition.current) {
      setIsScrolling('up');
    }

    prevScrollPosition.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition;

    setScrollPosition(currentScrollPosition);
  };
    useEffect(() => {
    window.addEventListener('scroll', scrollTracking);

    return () => window.removeEventListener('scroll', scrollTracking);
  }, []);
  return {
    isScrolling,
    scrollPosition
  };
}

export default useScrollHandling