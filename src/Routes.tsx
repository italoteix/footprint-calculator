import { Routes, Route } from 'react-router-dom';

import { Error404 } from './pages/Error404';

export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<div />} />
    <Route path='*' element={<Error404 />} />
  </Routes>
);
