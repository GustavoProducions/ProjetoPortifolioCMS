import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import ContactForm from './pages/SubPages/Contato';
import Usinagem from './pages/SubPages/Usinagem';
import Manutencoes from './pages/SubPages/Manutencao';
import PagePecasDiponiveis from './pages/SubPages/PagePecas';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contato',
    element: <ContactForm />
  },
  {
    path: '/usinagem',
    element: <Usinagem />
  },
  {
    path: '/manutencao',
    element: <Manutencoes />
  },
  {
    path: '/pecas/disponiveis',
    element: <PagePecasDiponiveis />
  },
  {
    path: '*',
    element: <Home />
  }
]);
