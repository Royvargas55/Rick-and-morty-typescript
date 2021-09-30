import React, {
  FC,
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import useCharacters from '../../hooks/useCharacters';
import CharacterContext from './CharacterContext';
import CharacterReducer from './CharacterReducer';
import { ADD_FAVORITE, DELETE_FAVORITE, AVOID_REPEATED } from '../Types';

const API = 'https://rickandmortyapi.com/api/character';

export const CharacterState: FC = (props) => {
  const { children } = props;
  const characters = useCharacters(API);
  const initialState = {
    favorites: [],
    error: null,
  };
  const [state, dispatch] = useReducer(CharacterReducer, initialState);

  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const filteredCharacters = useMemo(
    () =>
      characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      ),
    [characters, search]
  );

  const setFavorite = (favorite) => {
    if (state.favorites.includes(favorite)) {
      if (state.error) window.alert(state.error);
      return dispatch({
        type: AVOID_REPEATED,
      });
    }

    return dispatch({
      type: ADD_FAVORITE,
      payload: favorite,
    });
  };

  const deleteFavorite = (favoriteId) => {
    dispatch({
      type: DELETE_FAVORITE,
      payload: favoriteId,
    });
  };

  return (
    <CharacterContext.Provider
      value={{
        favorites: state.favorites,
        filteredCharacters,
        search,
        searchInput,
        handleSearch,
        setFavorite,
        deleteFavorite,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
