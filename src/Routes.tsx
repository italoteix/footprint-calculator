import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Error404 } from './pages/Error404';

export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='*' element={<Error404 />} />
  </Routes>
);
