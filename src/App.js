import { Route, Switch } from 'react-router-dom';

import Albums from './pages/Albums';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Albums} />
    </Switch>
  );
};

export default App;
