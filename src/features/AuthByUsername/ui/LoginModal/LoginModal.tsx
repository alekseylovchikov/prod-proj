import { LoginForm } from 'features/AuthByUsername';

export const LoginModal = () => {
  const name = 'LoginModal';

  return (
    <div>
      {name}
      <LoginForm />
    </div>
  );
};

export default LoginModal;
