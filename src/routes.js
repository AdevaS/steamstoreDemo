import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import GamesIndex from './components/games_index';
import GamesShow from './components/games_show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={GamesIndex} />
    <Route path="/games/:id" component={GamesShow}/>
  </Route>
);
