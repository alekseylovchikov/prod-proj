import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities';
import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  const { t } = useTranslation('main');

  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      <Counter />
      <h1>{t('main page')}</h1>
      <BugButton />
    </div>
  );
};

export default MainPage;
