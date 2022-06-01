import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';
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
      <Header />
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>

        <PrivateRoute exact path="/scores/:id">
          <ScoreDetail />
        </PrivateRoute>
        <PrivateRoute exact path="/scores">
          <Leaderboard />
        </PrivateRoute>

        <Route path="/profile/create">
          <CreateProfile />
        </Route>
        <PrivateRoute path="/profile/:id/edit">
          <EditProfile />
        </PrivateRoute>
        <PrivateRoute path="/profile/:id">
          <Profile />
        </PrivateRoute>

        <Route path="/">
          <Tetris />
        </Route>
      </Switch>
    </>
  );
}
