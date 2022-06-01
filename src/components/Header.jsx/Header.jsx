import { useAuth } from "../../hooks/user";
import { Link } from "react-router-dom";

export default function Header() {

  const { currentUser, logout } = useAuth();

  const handleSubmit = () => {
      logout();
  };

  return (
    <>
    <h1>Tetris</h1>
    <p>User: {currentUser.email}</p>
    {!currentUser ? 
    <Link to="/profile/create">
        <button>Create profile</button>
    </Link> 
    : 
    <Link to="/profile/:id">
        <button>Your Profile</button>
    </Link>
    }
    <button
     type="submit"
     onClick={handleSubmit}>
         Logout
     </button>
    </>
  )
}
