import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './styles/index.scss';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

import { useTheme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames/classNames';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <div>
        <button onClick={() => toggleTheme()}>Switch theme</button>
      </div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
