import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import App from './../../src/App'

describe('App Integration Test', () => {
  it('should render App correctly with all child components', () => {
    render(<App />)
    expect(screen.getByText('counter'));
  })

  it('should increment the counter when Counter button is clicked', () => {
    render(<App />)
    const incrementButton = screen.getAllByTestId('increment')
    fireEvent.click(incrementButton[0])
    expect(screen.getByText('Count is 1'));
  })  
})