import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './components/header/Navbar';

test('keeps the primary navigation destinations', () => {
  render(<MemoryRouter><Navbar /></MemoryRouter>);
  expect(screen.getByRole('link', { name: 'WorldTour' })).toHaveAttribute('href', '/');
  expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
  expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
});

test('toggles the mobile menu without navigating', () => {
  render(<MemoryRouter><Navbar /></MemoryRouter>);
  const button = screen.getByRole('button', { name: 'Toggle navigation' });
  expect(button).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(button);
  expect(button).toHaveAttribute('aria-expanded', 'true');
  expect(document.getElementById('primary-menu')).toHaveClass('mobile-menu-link');
  fireEvent.click(button);
  expect(button).toHaveAttribute('aria-expanded', 'false');
  expect(document.getElementById('primary-menu')).not.toHaveClass('mobile-menu-link');
});
