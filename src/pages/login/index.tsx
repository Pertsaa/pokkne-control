import { Dispatch, FC, useEffect } from 'react';

import { LoginContainer } from '../../components/layout/styles';
import { useSignIn } from '../../hooks/users/useSignIn';
import LoginForm from '../../components/forms/loginForm';

interface Props {
  showNotification: Dispatch<React.SetStateAction<string>>;
}

const Login: FC<Props> = ({ showNotification }) => {
  const { signIn, error } = useSignIn();

  useEffect(() => {
    if (error) showNotification(error.message);
  }, [error]);

  return (
    <main>
      <LoginContainer>
        <LoginForm onSubmit={(credentials) => signIn(credentials)} />
      </LoginContainer>
    </main>
  );
};

export default Login;
