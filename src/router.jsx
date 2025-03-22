import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Usinagem } from './pages/Usinagem';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/usinagem',
    element: <Usinagem />
  },
  {
    path: '*',
    element: <Home />
  }
]);
