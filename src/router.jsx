import { createHashRouter } from 'react-router-dom';
import { Home } from './pages/Home';
// import { NotFoundPage } from '@/pages/not-found/page';

export const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
  {
    path: '*',
    element: <Home />
  }
]);
