import { counterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
  test('should return decremented state', () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });

  test('should return incremented state', () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });

  test('should return incremented state with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
