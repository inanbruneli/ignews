import { render, screen } from '@testing-library/react';
import { SubscribeButton } from '.';


jest.mock('next-auth/react', () => {
  return {
    useSession() {
      return [null, false]
    }
  }
});


describe('Subscribe Button Component', () => {
  test('render correto', () => {

    render(<SubscribeButton />)
    expect(screen.getByText('Subscribe Now')).toBeInTheDocument();
  })
})