import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonTheme } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h1>{t('error')}</h1>
      <Button theme={ButtonTheme.CLEAR} onClick={handleReloadPage}>
        {t('reloadPage')}
      </Button>
    </div>
  );
};
