import { Switch, Route } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import Tetris from './views/Tetris/Tetris';
import ScoreBoard from './views/Scoreboard/Scoreboard';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        <Route path="/scores">
          <ScoreBoard />
        </Route>
        <Route path="/">
          <Tetris />
        </Route>
      </Switch>
    </>
  );
}
