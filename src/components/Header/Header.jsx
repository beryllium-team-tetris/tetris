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
    <h1>Tetris</h1>
    {!currentUser ? 
    <Link to="/login">
        <button>Register account</button>
    </Link> 
    : 
    <>
    <p>User: {currentUser.email}</p>
    <Link to={`/profile/${profileID}`}>
        <button>Your Profile</button>
    </Link>
    <Link to="/scores">
      <button>Leaderboard</button>
    </Link>
    <button
     type="submit"
     onClick={handleSubmit}>
         Logout
     </button>
    </>
    }
    <Link to='/'>
      <button>Tetris</button>
    </Link>
    </header>
  );
}
