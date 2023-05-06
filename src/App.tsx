import { Route, Routes } from 'react-router-dom';
import { Counter } from './components/Counter';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { MainPage } from './pages/MainPage/MainPage';
import { Link } from 'react-router-dom';

export const App = () => {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
};
