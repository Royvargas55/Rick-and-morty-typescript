import React, { FC } from 'react';
import classNames from 'classnames';
import useThemeContext from '../hooks/useThemeContext';
import CharactersList from '../components/CharactersList';
import Header from '../components/Header';

// Styles
import '../styles/components/Home.scss';

const Home: FC = () => {
  const { darkMode } = useThemeContext();

  const mainBackground = classNames('Home', {
    darkMode,
  });

  return (
    <div className={mainBackground}>
      <Header />
      <CharactersList />
    </div>
  );
};

export default Home;
