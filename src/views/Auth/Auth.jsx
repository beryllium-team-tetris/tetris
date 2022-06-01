import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/user';
import { createProfile } from '../../services/profile';
import authStyling from './Auth.css';

export default function Auth() {
  const {
    login,
    signUp,
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    type,
    setType,
  } = useAuth();

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      if (type === 'sign-in') {
        event.preventDefault();
        await login(email, password);
        history.replace('/');
      } else {
        event.preventDefault();
        const user_resp = await signUp(email, password);
        history.replace('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={authStyling.body}>
      <h1>
        <span
          className={type === 'sign-in' ? authStyling.active : ''}
          onClick={() => setType('sign-in')}
        >
          Sign-in
        </span>
        <span
          className={type === 'sign-up' ? authStyling.active : ''}
          onClick={() => setType('sign-up')}
        >
          Sign-up
        </span>
      </h1>
      <form className={authStyling.form} onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            placeholder="Email address"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button className={authStyling.button} type="submit">
          {type}
        </button>
      </form>
      <p>{error}</p>
    </div>
  );
}
