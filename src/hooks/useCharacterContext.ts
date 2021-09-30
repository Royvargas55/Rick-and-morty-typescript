import { useContext } from 'react';
import CharacterContext from '../context/Character/CharacterContext';

const useCharacterContext = () => {
  const value = useContext(CharacterContext);
  if (!value) {
    throw new Error('useCharacter must be inside CharacterContext provider');
  }
  return value;
};

export default useCharacterContext;
