import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Button', () => {
  it('hello', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>Test</Button>);

    expect(screen.getByText('Test1')).toBeInTheDocument();
  });
});
