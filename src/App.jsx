import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';
import Auth from './views/Auth/Auth';
import Tetris from './views/Tetris/Tetris';
import Leaderboard from './views/Scores/Leaderboard';
import ScoreDetail from './views/Scores/ScoreDetail';
import EditProfile from './views/Profile/EditProfile';
import Profile from './views/Profile/Profile';
import AboutUs from './views/Devs/AboutUs';

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

        <PrivateRoute path="/profile/:id/edit">
          <EditProfile />
        </PrivateRoute>
        <PrivateRoute path="/profile/:id">
          <Profile />
        </PrivateRoute>

        <Route path="/developers">
          <AboutUs />
        </Route>

        <PrivateRoute path="/">
          <Tetris />
        </PrivateRoute>
      </Switch>
    </>
  );
}
