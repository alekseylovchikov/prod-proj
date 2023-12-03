import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
  test('should render initial state', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    expect(screen.getByTestId('value-counter')).toHaveTextContent('10');
  });

  test('should increment', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    await userEvent.click(screen.getByRole('button', { name: '+' }));

    expect(screen.getByTestId('value-counter')).toHaveTextContent('11');
  });

  test('should decrement', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    await userEvent.click(screen.getByRole('button', { name: '-' }));

    expect(screen.getByTestId('value-counter')).toHaveTextContent('9');
  });
});
