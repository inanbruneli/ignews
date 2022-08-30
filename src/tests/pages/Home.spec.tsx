import { render, screen } from '@testing-library/react';
import Home from '../../pages';

jest.mock('next/router')
jest.mock('next-auto/react', () => {
  return {
    useSession() {
      return [null, false]
    }
  }
})

describe('home page', () => {
  it('render correto', () => {
    render(<Home product={{ priceId: 'fake id', amout: 'R$100,00' }} />);

    expect(screen.getByText('for R$100,00')).toBeInTheDocument()
  })
})