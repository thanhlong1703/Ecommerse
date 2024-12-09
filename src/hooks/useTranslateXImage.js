import { useEffect, useState } from 'react';
import useScrollHandling from '@/hooks/useScrollHanding';

const useTranslateXImage = () => {
  const { isScrolling, scrollPosition } = useScrollHandling();
  const [translateXPosition, setTranslateXPosition] = useState(60);

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
