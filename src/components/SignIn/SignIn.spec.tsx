import { render, screen } from '@testing-library/react';
import { SignIn } from '.';
import { useSession } from 'next-auth/react';


jest.mock('next-auth/react');

describe('SignIn Button Component', () => {
  test('render correto quando nao esta autenticado', () => {
    const useSessionMocked = jest.mocked(useSession);
    useSessionMocked.mockReturnValueOnce(null)

    render(<SignIn />)
    expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
  })


  test('render correto quando esta autenticado', () => {
    const useSessionMocked = jest.mocked(useSession);
    useSessionMocked.mockReturnValueOnce(
      {
        data: {
          user: { name: "John Doe", email: "john.doe@example.com" },
          expires: "fake-expires",
        },
      } as any
    )

    render(<SignIn />)
    expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
  })

})

