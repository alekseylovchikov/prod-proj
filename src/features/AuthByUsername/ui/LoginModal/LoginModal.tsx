import { classNames } from 'shared/lib/classNames/classNames';
import { LoginForm } from 'features/AuthByUsername';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
}

export const LoginModal = ({ className }: LoginModalProps) => {
  const name = 'LoginModal';

  return (
    <div className={classNames(cls.LoginModal, {}, [className])}>
      {name}
      <LoginForm />
    </div>
  );
};

export default LoginModal;
