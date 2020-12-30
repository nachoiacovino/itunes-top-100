import { Route, Switch } from 'react-router-dom';

import AlbumDetail from './pages/AlbumDetail';
import Albums from './pages/Albums';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Albums} />
      <Route exact path='/album/:id' component={AlbumDetail} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
