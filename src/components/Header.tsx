import React, { FC } from 'react';
import classNames from 'classnames';
import useThemeContext from '../hooks/useThemeContext';

// Styles
import '../styles/components/Header.scss';

const Header: FC = () => {
  const { handleClick, darkMode: darkModeButton } = useThemeContext();
  const buttonClass = classNames('btn', {
    darkModeButton,
  });

  return (
    <div className="Header">
      <h1>Bamboo Coding React Challenge</h1>
      <button className={buttonClass} onClick={handleClick} type="button">
        {darkModeButton ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Header;
