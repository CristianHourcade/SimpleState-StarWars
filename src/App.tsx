import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FavoritesContainer from './containers/FavoritesContainer';
import HomeContainer from './containers/HomeContainer';
import './styles/index.scss';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/favorites" component={FavoritesContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
