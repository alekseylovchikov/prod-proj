import { screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation/renderWithTranslation';

describe('Button', () => {
  it('should have text Test', () => {
    renderWithTranslation(<Button>Test</Button>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should have class clear', () => {
    renderWithTranslation(<Button theme={ThemeButton.CLEAR}>Test</Button>);

    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
