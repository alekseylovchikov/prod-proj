import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';

export const PageLoader = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.PageLoader)}>
      <h1 className={classNames(cls.text)}>{t('loading')}</h1>
    </div>
  );
};
