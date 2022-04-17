import { FC } from 'react';

import { LoginContainer } from '../../components/layout/styles';
import { useSignIn } from '../../hooks/users/useSignIn';
import LoginForm from '../../components/forms/loginForm';

const Login: FC = () => {
  const { signIn } = useSignIn();

  return (
    <main>
      <LoginContainer>
        <LoginForm onSubmit={(credentials) => signIn(credentials)} />
      </LoginContainer>
    </main>
  );
};

export default Login;
