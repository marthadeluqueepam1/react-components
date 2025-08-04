import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import GenreSelect from '../../src/components/GenreSelect';

describe('GenreSelect', () => {
  it('renders genre buttons', () => {
    render(
      <GenreSelect genres={['All', 'Documentary']} selectedGenre="All" onSelect={() => {}} />
    );

    expect(screen.getByText("All"))
    expect(screen.getByText("Documentary"))
  });

});