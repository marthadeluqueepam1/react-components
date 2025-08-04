import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import App from './../src/App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    screen.debug();
    expect(screen.getByText('counter'));
  });
});