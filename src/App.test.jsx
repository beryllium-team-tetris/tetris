import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { fakeUserData } from './services/fakeUserData';

const server = setupServer(
  rest.post(`${process.env.SUPABASE_URL}/auth/v1/signup`, (req, res, ctx) =>
    res(ctx.json(fakeUserData))
  )

);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<App />', () => {
  it(`displays auth page that directs to tetris game and has buttons for profile and scoreboard`, async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );

    const registerButton = await screen.findByRole('button', {
      name: /register account/i,
    });
    userEvent.click(registerButton);

    const emailInput = await screen.findByPlaceholderText(/email address/i);
    userEvent.type(emailInput, 'test_user@example.com');

    const passwordInput = await screen.findByPlaceholderText(/password/i);
    userEvent.type(passwordInput, 'random-password');

    const signUpButton = await screen.findByRole('button', {
      name: /sign-up/i,
    });
    userEvent.click(signUpButton);
  });
});
