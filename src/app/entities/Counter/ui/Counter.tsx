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
    <div>
      <h1>value = {counterValue}</h1>
      <Button onClick={increment}>increment</Button>
      <Button onClick={decrement}>decrement</Button>
    </div>
  );
};
