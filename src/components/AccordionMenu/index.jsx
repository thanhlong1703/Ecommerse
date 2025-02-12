import { useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TfiLayoutLineSolid } from 'react-icons/tfi';

function AccordionMenu({ titleMenu, contents, isSelected, onClick }) {
  const {
    container,
    title,
    activeTitle,
    contentMenu,
    isVisible,
    borderBottom
  } = styles;

  const handleToggle = () => {
    onClick();
  };
  return (
    <div className={container}>
      <div
        className={classNames(title, {
          [activeTitle]: isSelected
        })}
        onClick={handleToggle}
      >
        {isSelected ? (
          <TfiLayoutLineSolid style={{ fontSize: 10, padding: 5 }} />
        ) : (
          <MdKeyboardArrowDown style={{ fontSize: 20 }} />
        )}
        {titleMenu}
      </div>
      <div
        className={classNames(contentMenu, borderBottom, {
          [isVisible]: isSelected
        })}
      >
        {contents}
      </div>
    </div>
  );
}

export default AccordionMenu;
