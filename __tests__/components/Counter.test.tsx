import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import Counter from './../../src/components/Counter';

describe('Counter', () => {
  it('renders Counter component', () => {
    render(<Counter />);
    expect(screen.getByText('counter'));
  });
});