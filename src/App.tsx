import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { useNotification } from './hooks/notification/useNotification';
import { GlobalStyles } from './GlobalStyles';
import { useMe } from './hooks/users/useMe';
import { theme } from './theme';
import Chatbots from './pages/chatbots';
import Intents from './pages/intents';
import Login from './pages/login';
import Notification from './components/notification';

const App: FC = () => {
  const { me, loading } = useMe();
  const { notification, setNotification } = useNotification();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Notification notification={notification} />

      {!loading && (
        <Routes>
          <Route
            path="/login"
            element={
              !me ? (
                <Login showNotification={setNotification} />
              ) : (
                <Navigate to="/chatbots" replace />
              )
            }
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
      )}
    </ThemeProvider>
  );
};

export default App;
