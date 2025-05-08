import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Meal from './pages/Meal';
import Admin from './pages/Admin';
import ProtectedRoute from './auth/auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<Meal />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/admin' element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;