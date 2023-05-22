import { Button } from 'shared/ui/Button';
import { useEffect, useState } from 'react';
import { ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

// ErrorBoundary test
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={onThrow} theme={ThemeButton.CLEAR}>
      {t('throwError')}
    </Button>
  );
};
