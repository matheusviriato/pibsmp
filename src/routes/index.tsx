import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';

export default (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Home />} />
  </Routes>
);
