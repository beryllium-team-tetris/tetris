import { useAuth } from '../../hooks/user';
import { Link } from 'react-router-dom';
import headerStyling from './Header.css';

export default function Header() {
  const { currentUser, logout, profileID } = useAuth();

  const handleSubmit = () => {
    logout();
  };

  return (
    <header>
      <Link to="/">
        <h1 className={headerStyling.homeButton}>Tetris</h1>
      </Link>
      <div className={headerStyling.controls}>
        {currentUser && (
          <>
            <p>User: {currentUser.email}</p>
            <Link to={`/profile/${profileID}`}>
              <button>Your Profile</button>
            </Link>
            <Link to="/scores">
              <button>Leaderboard</button>
            </Link>
            <button type="submit" onClick={handleSubmit}>
              Logout
            </button>
          </>
        )}
        <Link to={`/developers`}>
          <button>Meet the Developers</button>
        </Link>
      </div>
    </header>
  );
}
