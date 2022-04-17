import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './GlobalStyles';
import { useMe } from './hooks/users/useMe';
import { theme } from './theme';
import Chatbots from './pages/chatbots';
import Intents from './pages/intents';
import Login from './pages/login';

const App: FC = () => {
  const { me, loading } = useMe();

  if (loading) return null;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Routes>
        <Route
          path="/login"
          element={!me ? <Login /> : <Navigate to="/chatbots" replace />}
        />
        <Route
          path="/chatbots"
          element={me ? <Chatbots /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/intents"
          element={me ? <Intents /> : <Navigate to="/login" replace />}
        />
        <Route
          path="*"
          element={
            !me ? (
              <Navigate to="/login" replace />
            ) : (
              <Navigate to="/chatbots" replace />
            )
          }
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
