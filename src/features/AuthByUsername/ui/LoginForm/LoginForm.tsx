import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation('auth');

  return <div className={classNames(cls.LoginForm, {}, [className])}>{t('loginForm')}</div>;
};
