import React, { FC } from 'react';
import classNames from 'classnames';
import useCharacterContext from '../hooks/useCharacterContext';
import useThemeContext from '../hooks/useThemeContext';
import SearchBar from './SearchBar';
import CharacterCard from './CharacterCard';

// Syles
import '../styles/components/Characters.scss';

const CharactersList: FC = () => {
  const { darkMode: darkModeCharacters } = useThemeContext();
  const { filteredCharacters, favorites, deleteFavorite, setFavorite } =
    useCharacterContext();

  const cardClass = classNames('Character__card', {
    darkModeCharacters,
  });

  const buttonClass = classNames('Character__card__favorite--button', {
    darkModeCharacters,
  });

  return (
    <>
      <SearchBar />
      <h2>Favorite Characters</h2>
      <div className="Character">
        {favorites.length ? (
          favorites.map((favorite) => (
            <CharacterCard
              id={favorite.id}
              image={favorite.image}
              name={favorite.name}
              status={favorite.status}
              species={favorite.species}
              action="Delete to favorite"
              actionMethod={() => deleteFavorite(favorite.id)}
              cardClassName={cardClass}
              buttonClassName={buttonClass}
            />
          ))
        ) : (
          <h4>You dont have any characters added to favorites yet.</h4>
        )}
      </div>
      <h2>All Characters</h2>
      <div className="Character">
        {filteredCharacters.map((character) => (
          <CharacterCard
            id={character.id}
            image={character.image}
            name={character.name}
            status={character.status}
            species={character.species}
            action="Add to favorite"
            actionMethod={() => setFavorite(character)}
            cardClassName={cardClass}
            buttonClassName={buttonClass}
          />
        ))}
      </div>
    </>
  );
};

export default CharactersList;
