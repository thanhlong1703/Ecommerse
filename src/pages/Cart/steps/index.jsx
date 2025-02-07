import Steper from '@/pages/Cart/steps/Steper';
import styles from '../styles.module.scss';
import { useState } from 'react';
function Steps() {
  const { containerSteps, steps, line, textNoti } = styles;
  const [stepActive, setStepActive] = useState(1);
  const dataSteps = [
    { number: 1, content: 'Shoping cart' },
    { number: 2, content: 'Checkout' },
    { number: 3, content: 'Order status' }
  ];
  const HandleSelectSteps = (step) => {
    setStepActive(step);
  };

  return (
    <div className={containerSteps}>
      <div className={steps}>
        {dataSteps.map((item, index) => {
          return (
            <>
              <div onClick={() => HandleSelectSteps(item.number)}>
                <Steper
                  key={index}
                  number={item.number}
                  content={item.content}
                  isDisable={stepActive !== item.number}
                />
              </div>
              {index !== dataSteps.length - 1 && <div className={line} />}
            </>
          );
        })}
      </div>
      <div className={textNoti}>You are out of time</div>
    </div>
  );
}

export default Steps;
