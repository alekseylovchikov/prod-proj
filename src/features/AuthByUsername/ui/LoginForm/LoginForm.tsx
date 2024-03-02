import { useTranslation } from 'react-i18next';

export const LoginForm = () => {
  const { t } = useTranslation('auth');

  return <div>{t('loginForm')}</div>;
};
