import { Routes, Route } from 'react-router-dom';

export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<div />} />
    <Route path='*' element={<div>Page not found</div>} />
  </Routes>
);
