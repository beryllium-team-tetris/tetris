import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { fakeUserData } from './services/fakeUserData';
import { fakeProfileData } from './services/fakeProfileData';

const server = setupServer(
    rest.post(`${process.env.SUPABASE_URL}/auth/v1/signup`, (req, res, ctx) => 
    res(
        ctx.json(fakeUserData)
    )
  ),
    
  rest.post(`${process.env.SUPABASE_URL}/rest/v1/profiles`, (req, res, ctx) => 
    res(
        ctx.json(fakeProfileData)
    )
  ),

    rest.get(`${process.env.SUPABASE_URL}/rest/v1/scores`, (req, res, ctx) =>
      res(
          ctx.json([
            {
                id: 1,
                created_at:"2022-06-01T17:44:46+00:00",
                profile_id: '12345',
                score: '3000',
                profiles:{"username":"testing_username"}
            },
            {
                id: 3,
                created_at:"2022-06-01T17:44:46+00:00",
                profile_id: '23456',
                score: '7000',
                profiles:{"username":"testing_username2"}
            },
          ])
      ) 
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

        const registerButton = await screen.findByRole('button', { name: /register account/i});
        userEvent.click(registerButton);

        const emailInput = await screen.findByPlaceholderText(/email address/i);
        userEvent.type(emailInput, 'test_user@example.com');

        const passwordInput = await screen.findByPlaceholderText(/password/i);
        userEvent.type(passwordInput, 'random-password');

        const signUpButton = await screen.findByRole('button', { name: /sign-up/i});
        userEvent.click(signUpButton);
        screen.debug();

        // const leaderboardButton = await screen.findByRole('button', { name: /leaderboard/i});
        // userEvent.click(leaderboardButton);


        // const testUsername1 = await screen.findByText(/testing_username/i);

    });
});