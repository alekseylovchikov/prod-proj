import { screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation/renderWithTranslation';

describe('Button', () => {
  it('should have text Test', () => {
    renderWithTranslation(<Button>Test</Button>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should have class clear', () => {
    renderWithTranslation(<Button theme={ButtonTheme.CLEAR}>Test</Button>);

    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
