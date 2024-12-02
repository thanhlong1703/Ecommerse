import { useEffect, useRef, useState } from 'react';
const useTranslateXImage = () => {
  const [isScrolling, setIsScrolling] = useState(null);
  const [translateXPosition, setTranslateXPosition] = useState(60);
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

  const handleTranslateX = () => {
    if (isScrolling === 'down' && scrollPosition >= 1500) {
      setTranslateXPosition(
        translateXPosition <= 0 ? 0 : translateXPosition - 1
      );
    } else if (isScrolling === 'up') {
      setTranslateXPosition(
        translateXPosition >= 60 ? 60 : translateXPosition + 1
      );
    }
  };

  useEffect(() => {
    handleTranslateX();
  }, [scrollPosition]);

  return {
    translateXPosition
  };
};

export default useTranslateXImage;
