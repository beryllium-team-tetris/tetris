import { Switch, Route } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import Tetris from './views/Tetris/Tetris';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        <Route path="/">
          <Tetris />
        </Route>
      </Switch>
    </>
  );
}
