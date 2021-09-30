import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeState } from '../context/Theme/ThemeState';

// Components
import Home from '../pages/Home';
import CharacterDetails from '../pages/CharacterDetails';

const App: FC = () => (
  <BrowserRouter>
    <Switch>
      <ThemeState>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/character/:id">
          <CharacterDetails />
        </Route>
      </ThemeState>
    </Switch>
  </BrowserRouter>
);

export default App;
