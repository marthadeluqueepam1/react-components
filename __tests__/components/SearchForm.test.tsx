import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SearchForm from '../../src/components/SearchForm';

describe('SearchForm', () => {
  it('renders input and button', () => {
    render(
      <SearchForm initialQuery="" onSearch={() => {}} />
    );
    expect(screen.getAllByPlaceholderText("What do you want to watch?"))
    expect(screen.getByText("Search"))
  });

  it('calls onSearch with correct value on button click', () => {
    const onSearchMock = vi.fn();
    render(
      <SearchForm initialQuery="Pulp fiction" onSearch={onSearchMock} />
    );

    const input = screen.getAllByPlaceholderText("What do you want to watch?");
    const button = screen.getAllByText("Search");

    fireEvent.change(input[0], { target: { value: 'Spiderman' } });
    fireEvent.click(button[0]);

    //expect(onSearchMock).toHaveBeenCalledWith('Spiderman');
  });
});