import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
// Styles
import '../styles/components/Characters.scss';

interface CharacterCardProps {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  action: string;
  actionMethod: MouseEventHandler;
  buttonClassName: string;
  cardClassName: string;
}

const CharacterCard = (props: CharacterCardProps) => {
  const {
    id,
    image,
    name,
    status,
    species,
    action,
    actionMethod,
    buttonClassName,
    cardClassName,
  } = props;
  return (
    <div className={cardClassName} key={id}>
      <Link to={`/character/${id}`}>
        <div className="Character__card__img">
          <img src={image} alt="character img" />
        </div>
      </Link>
      <div className="Character__card__info">
        <div className="Character__card__favorite">
          <h2>{name}</h2>
          <button
            className={buttonClassName}
            type="button"
            onClick={actionMethod}
          >
            {action}
          </button>
        </div>
        <div className="Character__card__info--extra">
          <h5>Status:</h5>
          <span>{status}</span>
          <h5>Species:</h5>
          <span>{species}</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
