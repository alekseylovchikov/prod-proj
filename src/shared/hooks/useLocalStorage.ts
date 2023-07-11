import { useCallback, useState } from 'react';

interface UseLocalStorageProps {
  key: string;
  defaultValue?: string;
}

export const useLocalStorage = ({ key, defaultValue }: UseLocalStorageProps) => {
  const [value, setValue] = useState<string | undefined>(() => {
    const valueFromStorage = localStorage.getItem(key);

    if (!valueFromStorage && defaultValue) {
      localStorage.setItem(key, defaultValue);
      return defaultValue;
    }

    return valueFromStorage;
  });

  const setValueToStorage = useCallback(
    (newValueToStorage: string) => {
      localStorage.setItem(key, newValueToStorage);
      setValue(newValueToStorage);
    },
    [key],
  );

  return { getValueFromStorage: value, setValueToStorage };
};
