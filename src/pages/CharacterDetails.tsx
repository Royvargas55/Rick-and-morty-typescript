import React, { FC, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import useThemeContext from '../hooks/useThemeContext';
import Loader from '../components/Loader';

// Styles
import '../styles/components/CharacterDetails.scss';

const CharacterDetails: FC = () => {
  const { id } = useParams();
  const history = useHistory();
  const { darkMode } = useThemeContext();

  const mainBackground = classNames('Home', {
    darkMode,
  });

  const [loader, setLoader] = useState(false);

  const [character, setCharacter] = useState({
    id: '',
    name: '',
    status: '',
    species: '',
    gender: '',
    image: '',
    origin: { name: '' },
    episode: [],
    created: '',
  });

  useEffect(() => {
    setLoader(true);
    window
      .fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
    setLoader(false);
  }, []);

  return (
    <div className={mainBackground}>
      {loader && (
        <div className="wrapper">
          <Loader />
        </div>
      )}
      {character.id && (
        <div className="wrapper">
          <div className="character-card">
            <div className="character-card__image">
              <img src={character.image} alt="character" />
            </div>
            <div className="character-card__level">{character.status}</div>
            <div className="character-card__unit-name">{character.name}</div>
            <div className="character-card__unit-description">
              Sepecie: {character.species} <br />
              Gender: {character.gender}
            </div>

            <div className="character-card__unit-stats clearfix">
              <div className="one-third">
                <div className="stat">{character.origin.name}</div>
                <div className="stat-value">Origin</div>
              </div>

              <div className="one-third">
                <div className="stat">{character.episode.length}</div>
                <div className="stat-value">Episodes</div>
              </div>

              <div className="one-third no-border">
                <div className="stat">{character.created.slice(0, 10)}</div>
                <div className="stat-value">Created</div>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        className="back--button"
        type="button"
        onClick={() => history.goBack()}
      >
        Back
      </button>
    </div>
  );
};

export default CharacterDetails;
