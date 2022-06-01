import { useAuth } from "../../hooks/user";
import { Link } from "react-router-dom";
import headerStyling from './Header.css';

export default function Header() {

  const { currentUser, logout } = useAuth();

  const handleSubmit = () => {
      logout();
  };

  return (
    <header>
    <h1>Tetris</h1>
    {!currentUser ? 
    <Link to="/login">
        <button>Sign-up</button>
    </Link> 
    : 
    <>
    <p>User: {currentUser.email}</p>
    {<Link to="/profile/:id">
        <button>Your Profile</button>
    </Link>}
    <button
     type="submit"
     onClick={handleSubmit}>
         Logout
     </button>
    </>
    }
    </header>
  )
}
