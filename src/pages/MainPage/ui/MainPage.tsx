import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';

// import { Counter } from 'entities/Counter';
import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');

  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      {/* <Counter /> */}
      <h1>{t('main page')}</h1>
      <BugButton />
      <Input value={value} onChange={setValue} placeholder="Test input" />
    </div>
  );
};

export default MainPage;
