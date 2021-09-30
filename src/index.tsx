import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './routes/App';
import { CharacterState } from './context/Character/CharacterState';

// Styles
import './styles/index.scss';

ReactDom.render(
  <CharacterState>
    <App />
  </CharacterState>,
  document.getElementById('root')
);
