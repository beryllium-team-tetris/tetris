import { Switch, Route } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import Tetris from './views/Tetris/Tetris';
import Leaderboard from './views/Scores/Leaderboard';
import ScoreDetail from './views/Scores/ScoreDetail';
import EditProfile from './components/Profile/EditProfile';
import CreateProfile from './components/Profile/CreateProfile';
import Profile from './components/Profile/profile';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>

        <Route path="/scores/:id">
          <ScoreDetail />
        </Route>

        <Route path="/scores">
          <Leaderboard />
        </Route>

        <Route path="/profile/create">
          <CreateProfile />
        </Route>

        <Route path="/profile/:id/edit">
          <EditProfile />
        </Route>

        <Route path="/profile/:id">
          <Profile />
        </Route>

        <Route path="/">
          <Tetris />
        </Route>
      </Switch>
    </>
  );
}
