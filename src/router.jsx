import { createHashRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Usinagem } from './pages/Usinagem';
// import { NotFoundPage } from '@/pages/not-found/page';

export const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/usinagem',
        element: <Usinagem />
      }
    ]
  },
  {
    path: '*',
    element: <Home />
  }
]);
