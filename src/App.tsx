import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { theme } from './theme';
import Chatbots from './pages/chatbots';
import Fallback from './pages/fallback';
import Intents from './pages/intents';
import Login from './pages/login';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chatbots" element={<Chatbots />} />
        <Route path="/intents" element={<Intents />} />
        <Route path="/fallback" element={<Fallback />} />
        <Route path="*" element={<Navigate to="/chatbots" replace />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
