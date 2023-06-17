import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AboutPage.module.scss';

interface AbourPageProps {
  className?: string;
}

const AboutPage = ({ className }: AbourPageProps) => {
  const { t } = useTranslation('about');

  return (
    <div className={classNames(cls.AboutPage, {}, [className])}>
      <h1>{t('about us')}</h1>
    </div>
  );
};

export default AboutPage;
