import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Usinagem } from './pages/Usinagem';
import ContactForm from './pages/SubPages/Contato';

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
    path: '/contato',
    element: <ContactForm />
  },
  {
    path: '*',
    element: <Home />
  }
]);
