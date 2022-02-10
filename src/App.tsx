import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/mainPage/MainPage';
import { LoginPage } from './pages/loginPage/LoginPage';
import { RegisterPage } from './pages/registerPage/RegisterPage';
import { InsidePage } from './pages/insidePage/InsidePage';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/inside" element={<InsidePage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
