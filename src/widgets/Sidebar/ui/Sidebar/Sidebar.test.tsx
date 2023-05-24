import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('should render sidebar', () => {
    renderWithTranslation(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('should toggled sidebar', () => {
    renderWithTranslation(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();

    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
