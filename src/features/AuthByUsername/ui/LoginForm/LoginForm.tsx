import { classNames } from 'shared/lib/classNames/classNames';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  console.log('LoginForm');

  return <div className={classNames(cls.LoginForm, {}, [className])}>LoginForm</div>;
};
