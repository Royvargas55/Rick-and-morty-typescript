/* eslint-disable no-undef */
import React, { FC } from 'react';
import classNames from 'classnames';
import useThemeContext from '../hooks/useThemeContext';
import useCharacterContext from '../hooks/useCharacterContext';

// Styles
import '../styles/components/SearchBar.scss';

const SearchBar: FC = () => {
  const { search, searchInput, handleSearch } = useCharacterContext();
  const { darkMode: searchDarkMode } = useThemeContext();
  const inputClass = classNames('searchBar', { searchDarkMode });
  return (
    <>
      <input
        ref={searchInput}
        placeholder="Search character"
        className={inputClass}
        type="text"
        value={search}
        onChange={handleSearch}
      />
    </>
  );
};

export default SearchBar;
