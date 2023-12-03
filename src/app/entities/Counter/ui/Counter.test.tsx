import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
  test('should render initial state', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    expect(screen.getByTestId('value-counter')).toHaveTextContent('10');
  });

  test('should increment', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    screen.getByRole('button', { name: '+' }).click();

    expect(screen.getByTestId('value-counter')).toHaveTextContent('11');
  });

  test('should decrement', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    screen.getByRole('button', { name: '-' }).click();

    expect(screen.getByTestId('value-counter')).toHaveTextContent('9');
  });
});
