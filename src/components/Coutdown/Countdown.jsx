import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const CountDown = ({ targetDate }) => {
  const { container, numberItem, intervalItem } = styles;
  const [timeLeft, setTimeLeft] = useState(calTimeLeft());

  function calTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Mins: Math.floor((difference / (1000 * 60)) % 60),
        Secs: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatNum = (number) => {
    return String(number).padStart(2, '0');
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] !== undefined) {
      timerComponents.push(
        <div key={interval} className={container}>
          <div className={numberItem}> {formatNum(timeLeft[interval])}</div>
          <div className={intervalItem}> {interval} </div>
        </div>
      );
    }
  });

  return timerComponents;
};

export default CountDown;
