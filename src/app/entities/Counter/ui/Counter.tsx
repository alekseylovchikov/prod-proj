import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { counterActions, getCounterValue } from 'app/entities/Counter';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <h1 data-testid="value-counter">{counterValue}</h1>
      <Button data-testid="incerment" onClick={increment}>
        +
      </Button>
      <Button data-testid="decrement" onClick={decrement}>
        -
      </Button>
    </div>
  );
};
